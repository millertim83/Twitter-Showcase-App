import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
    return(
        <div className = "navigation">
            <nav className = "navbar-expand navbark-dark bg-light">
                <div className = "container">
                    <Link className = "navbar-brand" to="/">
                    </Link>

                    <div>
                        <ul className = "navbar-nav ml-auto">
                            <li
                                className = {`nav-item ${props.location.pathname === "/" ? "active" : "inactive"
                                }`} 
                                
                            >
                                <Link className = "nav-link nav-title" to = "/">
                                    Home
                                    <span className = "sr-only"></span>
                                </Link>
                            </li>
                            <li
                                className = {`nav-item ${props.location.pathname === "/Search" ? "active" : "inactive"
                                }`}
                            >
                                <Link className = "nav-link nav-title" to = "/Search">
                                    Search
                                </Link>
                            </li>
                            <li
                                className = {`nav-item ${props.location.pathname === "/Favorites" ? "active" : "inactive"
                                }`}
                            >
                                <Link className = "nav-link nav-title" to = "/Favorites">
                                    Favorites
                                </Link>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Nav);