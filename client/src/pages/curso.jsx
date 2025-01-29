import React, { useState, useEffect } from 'react';
import '../styles/Curso.css';

function Curso() {
    const [formData, setFormData] = useState({
        nivel: '',
        grupo: '',
        turno: '',
        periodo: '', // Agregamos este campo
    });

    const [message, setMessage] = useState('');
    const [periodos, setPeriodos] = useState([]); // Estado para almacenar los periodos

    // Obtener periodos del backend
    useEffect(() => {
        const fetchPeriodos = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/periodos/'); // URL de tu API
                if (response.ok) {
                    const data = await response.json();
                    setPeriodos(data);
                } else {
                    console.error('Error al cargar los periodos');
                }
            } catch (error) {
                console.error('Error de red:', error);
            }
        };

        fetchPeriodos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/cursos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Curso creado con éxito');
                setFormData({ nivel: '', grupo: '', turno: '', periodo: '' });
            } else {
                const errorData = await response.json();
                setMessage(`Error al crear el curso: ${errorData.detail}`);
            }
        } catch (error) {
            setMessage('Error de red. Inténtalo de nuevo más tarde.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="panel">
                <h1>Registrar Curso</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nivel:
                        <select name="nivel" value={formData.nivel} onChange={handleChange}>
                            <option value="">Seleccione un nivel</option>
                            <option value="Basico 1">Basico 1</option>
                            <option value="Basico 2">Basico 2</option>
                            <option value="Basico 3">Basico 3</option>
                            <option value="Basico 4">Basico 4</option>
                            <option value="Basico 5">Basico 5</option>
                            <option value="Intermedio 1">Intermedio 1</option>
                            <option value="Intermedio 2">Intermedio 2</option>
                            <option value="Intermedio 3">Intermedio 3</option>
                            <option value="Intermedio 4">Intermedio 4</option>
                            <option value="Intermedio 5">Intermedio 5</option>
                            <option value="Super Intensivo A1">Super Intensivo A1</option>
                            <option value="Super Intensivo B1">Super Intensivo B1</option>
                            <option value="Super Intensivo B1.1">Super Intensivo B1.1</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Grupo:
                        <select name="grupo" value={formData.grupo} onChange={handleChange}>
                            <option value="">Seleccione un grupo</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Turno:
                        <select name="turno" value={formData.turno} onChange={handleChange}>
                            <option value="">Seleccione un turno</option>
                            <option value="Lunes a Viernes">Lunes a Viernes</option>
                            <option value="Sabado y Domingo">Sabado y Domingo</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Periodo:
                        <select name="periodo" value={formData.periodo} onChange={handleChange}>
                            <option value="">Seleccione un periodo</option>
                            {periodos.map((periodo) => (
                                <option key={periodo.id} value={periodo.id}>
                                    {periodo.año} - {periodo.periodo}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br />
                    <button type="submit">Registrar Curso</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Curso;
