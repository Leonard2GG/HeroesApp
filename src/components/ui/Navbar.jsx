import { Link, NavLink } from 'react-router';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary-subtle" data-bs-theme="dark">

            <a className="navbar-brand" href="#">
                <img src="/src/assets/react.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            </a>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className="nav-item nav-link"
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}