import React from 'react';
import './header.css';
import brflag from '../assets/brazil-flag.png';

const Header = () => {
    return (
        <>
            <header className="header-main">
                <div className="container">
                    <h1>Tabela Brasileirão</h1>
                    <img src={brflag} alt="Brazil Flag"></img>
                </div>
            </header>
        </>
    );
};

export default Header;