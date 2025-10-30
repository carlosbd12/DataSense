// Responsabilidad: Estructura de la aplicación, rutas, estado global
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Formulario.jsx';
import { HomePage } from './pages/Home.jsx';
import PrivateRoute from './components/auth/PrivateRoute.jsx';

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/" element={
                    <PrivateRoute user={user}>
                        <HomePage user={user} setUser={setUser}/>
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    );
}

export default App;