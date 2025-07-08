import { Link, NavLink } from 'react-router';


export const Navbar = () => {

    const handleLogout = () => {
        console.log('Logout clicked');
    }
    return (
        <nav className="navbar navbar-expand-sm bg-primary-subtle" data-bs-theme="dark">

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <a className="navbar-brand" href="#">
                        <img src="/src/assets/react.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>

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

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>Leonardo</span>
                    <button
                        className="nav-item nav-link btn"
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav >
    )
}