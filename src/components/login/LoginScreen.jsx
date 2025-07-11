import React from 'react';
import { useNavigate } from 'react-router';

export default function LoginScreen() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/marvel', {
            replace: true
        });
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg bg-primary-subtle" data-bs-theme="dark" style={{ width: '400px' }}>
                <img src="/src/assets/react.svg" alt="React Logo" className="mx-auto d-block" style={{ width: '100px', marginBottom: '20px', height: '100px', }} />
                <h2 className="text-center mb-4 text-info">HeroesApp</h2>
                <button onClick={handleLogin} className="btn btn-info">Login</button>
            </div>
        </div>
    );
}
