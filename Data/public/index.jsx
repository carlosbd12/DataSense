import React from 'react';
import ReactDOM from 'react-dom/client';
import { Formulario } from './components/formulario.jsx';  // ← Nota las llaves {}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Formulario />
    </React.StrictMode>
);