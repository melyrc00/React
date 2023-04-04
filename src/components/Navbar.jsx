import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <ul className="nav_items">
                <li>

                <Link to="/Contacto">contacto</Link>
                </li>

                <li>
                <Link to="/Nosotros">nosotros</Link>
                </li>

                <li>
                <Link to="/Ciudades">ciudades</Link>
                </li>

            </ul>

        </div>
    )
}

export default Navbar

