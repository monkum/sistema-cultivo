import React from 'react';
import '../styles/components/Header.scss';


const Header = () => {
    return (
        <nav>
            <div className="contenedor">
                <a href="/login" className="logotipo">AGRICOLOMBIA S.A.S.</a>
                <navbar>
                    <a href="/dashboard">Menu Principal</a>
                </navbar>
            </div>
        </nav>
    )
}

export default Header;