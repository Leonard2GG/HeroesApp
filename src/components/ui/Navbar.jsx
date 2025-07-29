import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types'



export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        const action = {
            type: types.logout,
        }
        dispatch(action);
        navigate('/', {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm bg-primary-subtle" data-bs-theme="dark">

            <div className="navbar-collapse">
                <div className="navbar-nav m-1">
                    <a className="navbar-brand" href="#">
                        <img src="/src/assets/react.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>

                    <NavLink
                        className={({ isActive }) => {
                            return 'nav-item nav-link' + (isActive ? ' active' : '');
                        }
                        }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => {
                            return 'nav-item nav-link' + (isActive ? ' active' : '');
                        }
                        }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => {
                            return 'nav-item nav-link' + (isActive ? ' active' : '');
                        }
                        }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>
                    <button
                        className="nav-item nav-link"
                        to="/"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav >
    )
}