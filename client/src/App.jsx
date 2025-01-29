import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Periodo from "./pages/periodo";
import Curso from "./pages/curso";
import Navbar from "./components/Navbar";
import Home from "./pages/home.jsx"; // Ajusta la ruta si es necesario
import Docente from "./pages/docente.jsx";
import PeriodoList from "./pages/list-periodo.jsx";

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/periodo" element={<Periodo />} />
            <Route path="/docente" element={<Docente />} />
            <Route path="/curso" element={<Curso />} />
            <Route path="/list-periodo" element={<PeriodoList />} />
        </Routes>
    </BrowserRouter>
);

export default App;
