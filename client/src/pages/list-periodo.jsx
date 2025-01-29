import React, { useEffect, useState } from "react";
import '../styles/list-periodo.css';
import axios from "axios";

const PeriodoList = () => {
    const periodos = [
        { id: 1, nombre: "Primer Periodo", inicio: "01-01-2025", fin: "31-03-2025" },
        { id: 2, nombre: "Segundo Periodo", inicio: "01-04-2025", fin: "30-06-2025" },
        { id: 3, nombre: "Tercer Periodo", inicio: "01-07-2025", fin: "30-09-2025" },
        { id: 4, nombre: "Cuarto Periodo", inicio: "01-10-2025", fin: "31-12-2025" },
    ];

    return (
        <div className="panel">
            <h2 className="panel-title">Tabla de Periodos</h2>
            <table className="periodos-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Inicio</th>
                    <th>Fin</th>
                </tr>
                </thead>
                <tbody>
                {periodos.map((periodo) => (
                    <tr key={periodo.id}>
                        <td>{periodo.id}</td>
                        <td>{periodo.nombre}</td>
                        <td>{periodo.inicio}</td>
                        <td>{periodo.fin}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PeriodoList;
