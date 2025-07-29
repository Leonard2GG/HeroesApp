import { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { Navigate } from 'react-router'

export default function PrivateRoute({ children }) {

    const { user } = useContext(AuthContext);

    return user.logged ? children : <Navigate to='/' />

}
