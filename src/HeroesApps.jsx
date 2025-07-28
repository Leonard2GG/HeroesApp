import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routes/AppRouter'
import { useReducer } from 'react'

export default function HeroesApps() {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || { logged: false };
    }

    const [user, dispatch] = useReducer(authReducer, {}, init);
    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
