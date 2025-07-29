import { useEffect } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routes/AppRouter'
import { useReducer } from 'react'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export default function HeroesApps() {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if (!user) return

        localStorage.setItem('user', JSON.stringify(user));
    }), [user]

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
