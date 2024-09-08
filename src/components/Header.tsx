import React from 'react';
import logo from '../assets/icon.png';
import '../index.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Enos Weather Forecaster</h1>
            <img src={logo} alt="Logo" className="header-logo" />
        </header>
    );
}

export default Header;
