import React, { useState } from 'react';
import '../styles/Docente.css';

function Docente() {
    const [formData, setFormData] = useState({
        nombre_docente: '',
        apellido_docente: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/docentes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setMessage('Docente registrado con éxito');
                setFormData({ nombre_docente: '', apellido_docente: '' }); // Reset form
            } else {
                const errorData = await response.json();
                setMessage(`Error al registrar el docente: ${errorData.detail}`);
            }
        } catch (error) {
            setMessage('Error de red. Inténtalo de nuevo más tarde.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="panel">
                <h1>Registrar Docente</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre_docente"
                            value={formData.nombre_docente}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Apellido:
                        <input
                            type="text"
                            name="apellido_docente"
                            value={formData.apellido_docente}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Registrar Docente</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Docente;
