import React, { useState } from 'react';
import '../styles/Periodo.css';

function Periodo() {
    const [formData, setFormData] = useState({
        año: '2020',
        periodo: 'Enero-junio A'
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
            const response = await fetch('http://localhost:8000/api/periodo/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setMessage('Periodo creado con éxito');
                setFormData({ año: '2020', periodo: 'Enero-junio A' }); // Reset form
            } else {
                const errorData = await response.json();
                setMessage(`Error al crear el periodo: ${errorData.detail}`);
            }
        } catch (error) {
            setMessage('Error de red. Inténtalo de nuevo más tarde.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="panel">
                <h1>Periodo</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Año:
                        <select name="año" value={formData.año} onChange={handleChange}>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Periodo:
                        <select name="periodo" value={formData.periodo} onChange={handleChange}>
                            <option value="Enero-junio A">Enero-junio A</option>
                            <option value="Enero-junio B">Enero-junio B</option>
                            <option value="Agosto-Diciembre A">Agosto-Diciembre A</option>
                            <option value="Agosto-Diciembre B">Agosto-Diciembre B</option>
                            <option value="Invierno">Invierno</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Guardar</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Periodo;
