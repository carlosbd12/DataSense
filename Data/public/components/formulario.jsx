import "./formulario.css";
import React, { useState } from 'react';

export function Formulario(){
    const [nombre, setNombre] = useState("")
    const [pass, setPass] = useState("")

    return(
        <section>
            <h1>DataSense</h1>
            <form className="formulario">
                <label>Usuario</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                <label>Contraseña</label>
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button>Entrar</button>
            </form>
        </section>
    )
}