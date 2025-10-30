import { useNavigate } from 'react-router-dom';

export const HomePage = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                <h1>Bienvenido, {user?.nombre}</h1>
                <button onClick={handleLogout} style={{
                    padding: '10px 20px',
                    cursor: 'pointer',
                    backgroundColor: '#00d4ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}>
                    Cerrar Sesión
                </button>
            </header>

            {/* Resto de tu contenido */}
            <main>
                <p>Contenido de la página principal</p>
            </main>
        </div>
    );
};