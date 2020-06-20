import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


function Header() {
    return (
        <nav>
            <ul className="container">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;