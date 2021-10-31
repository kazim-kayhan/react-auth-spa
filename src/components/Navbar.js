import React from "react";
import { Link } from "react-router-dom";

const Navbar = ( { user, setUser } ) =>{
    const handleLogout = () => {
        localStorage.clear();
        setUser("");
    }
    let buttons = user ? (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to='/' onClick={ handleLogout } className="nav-link">Logout</Link>
            </li>
        </ul>
        ) : (
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to='/register' className="nav-link">Register</Link>
            </li>
        </ul>
    );
    return (
        <nav className="navbar navbar-expand bg-white fixed-top">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <Link to='/' className="navbar-brand">Home</Link>
                    { buttons }
                </div>
            </div>
        </nav>
    );
}
export default Navbar;