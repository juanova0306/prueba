import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de incluir estilos para el dropdown

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/home">Home</Link>
                </li>

                {/* Dropdown para registros */}
                <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span className="dropdown-link">Registros</span>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/periodo">Periodo</Link></li>
                            <li><Link to="/docente">Docente</Link></li>
                            <li><Link to="/curso">Curso</Link></li>
                            <li><Link to="/alumno">Alumno</Link></li>
                            <li><Link to="/calificaciones">Calificaciones</Link></li>
                        </ul>
                    )}
                </li>

                {/* Dropdown para visualizacion */}
                <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <span className="dropdown-link">Listados</span>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/list-periodo">Periodos</Link></li>
                            <li><Link to="/list-curso">Cursos</Link></li>
                            <li><Link to="/list-alumno">Alumnos</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
