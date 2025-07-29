import { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { Navigate } from 'react-router'

export default function PublicRoute({ children }) {

    const { user } = useContext(AuthContext);

    return user.logged ? <Navigate to='/marvel' /> : children
}
