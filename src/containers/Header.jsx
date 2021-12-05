import React from 'react';
import '../styles/Header.scss';
import user from '../assets/icons/person-circle.svg';
import logout from '../assets/icons/box-arrow-right.svg';
import logo from '../assets/logos/logoProv.jpg';

const Header = () => {
    return (
        <nav>
            <div className="barnav-izq">
                <img src={logo} alt="logo" classNameName="nav-logo" />
                <p className="nombre">Agricolombia S.A.S.</p>
            </div>

            <div className="barnav-der">
                <img src={user} alt="usericon"/>
                <ul>
                    <li className="rol">Administrador</li>
                    <li className="logout">
                        <img src={logout} alt="salir"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;