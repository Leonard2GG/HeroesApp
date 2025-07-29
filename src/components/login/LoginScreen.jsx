import { useNavigate } from 'react-router';
import { types } from '../../types/types'
import { useContext } from 'react';
import { AuthContext } from '../../auth/authContext'

export default function LoginScreen() {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: 'User' },
        }
        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        navigate(lastPath, {
            replace: true
        });
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
            <div className="card p-4 shadow-lg bg-primary-subtle" data-bs-theme="dark" style={{ width: '400px' }}>
                <img src="/src/assets/react.svg" alt="React Logo" className="mx-auto d-block" style={{ width: '100px', marginBottom: '20px', height: '100px', }} />
                <h2 className="text-center mb-4 text-info">HeroesApp</h2>
                <button onClick={handleLogin} className="btn btn-info">Login</button>
            </div>
        </div>
    );
}
