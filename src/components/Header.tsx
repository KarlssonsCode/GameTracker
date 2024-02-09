import React from "react";
import { NavLink } from "react-router-dom";
import './Components.css';

const Header: React.FC = () => {
    return (
        <nav className="nav">
            <div className="container">
                <h1>Game Tracker</h1>
                <div className="nav-items">
                    
                    <ul>
                        <li>
                            <NavLink to="/">
                                Start
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/backlog">
                                Backlog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/toplist">
                                Completed Games
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
