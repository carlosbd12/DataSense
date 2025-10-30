import '../../styles/global.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({setUser}){
    const [nombre, setNombre] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(nombre === "" || pass === ""){
            setError(true)
            return
        }
        setError(false)

        setUser({ nombre: nombre})
        navigate('/');  // Redirige a la página home
    }

    return(
        <section>
            <h1>DataSense</h1>
            <form className="formulario"
                  onSubmit={handleSubmit}
            >
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
            {error && <p className="error-message">Por favor, rellene todos los campos</p>}
        </section>
    )
}

export default Login;