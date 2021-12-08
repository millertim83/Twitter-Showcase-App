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
                                className = {`nav-item ${props.location.pathname === "/" ? "active" : ""
                                }`} 
                                
                            >
                                <Link className = "nav-link" to = "/">
                                    Home
                                    <span className = "sr-only"></span>
                                </Link>
                            </li>
                            <li
                                className = {`nav-item ${props.location.pathname === "/Search" ? "active" : ""
                                }`}
                            >
                                <Link className = "nav-link" to = "/Search">
                                    Search
                                </Link>
                            </li>
                            <li
                                className = {`nav-item ${props.location.pathname === "/Favorites" ? "active" : ""
                                }`}
                            >
                                <Link className = "nav-link" to = "/Favorites">
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