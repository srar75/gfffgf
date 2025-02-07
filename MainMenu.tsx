import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/anagrafica">Anagrafica</Link>
                </li>
                <li>
                    <Link to="/preassunzione">Pre-assunzione</Link>
                </li>
                <li>
                    <Link to="/documenti">Documenti</Link>
                </li>
                <li>
                    <Link to="/panorama">Panorama</Link>
                </li>
                <li>
                    <Link to="/cv">CV</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;