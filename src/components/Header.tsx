import React from "react";
import './Components.css';

const Header: React.FC = () => {
    return (
        <div>
            <header className="Header">
                <h1>Game Tracker</h1>
                <nav>
                    <ul className="nav-items">
                        <li><a href="start">Start</a></li>
                        <li><a href="backlog">Backlog</a></li>
                        <li><a href="toplist">Toplist</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;
