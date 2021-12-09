import React, { Fragment } from "react";
import Header from "../../components/Header";
import user from "../../assets/icons/person-fill.svg"
import world from "../../assets/icons/earth-globe_icon-icons.com_73587.svg"
import pin from "../../assets/icons/pin-map.svg"

import "../../styles/dashboard/Dashboard.scss";

const Principal = () => {
    return (
        <Fragment>
            <Header/>
            <div className="cuerpoGest">
                <div>
                    <h1 className="tituloPrin">Dashboard Administrativo</h1>
                </div>
                <div className="menu">
                    <ul className="listaMenu">
                        <li className="contenedorlista">
                            <a href="/admin/usermenu">
                                <img src={user} alt="usericon" className="usericon" id="items"/>
                                <p id="items">Gestionar Usuario</p>
                            </a>
                        </li>
                        <li className="contenedorlista">
                            <a href="/production/register">
                                <img src={world} alt="worldicon" className="worldicon" id="items"/>
                                <p id="items">Registrar Predios</p>
                            </a>
                        </li>
                        <li className="contenedorlista">
                            <a href="/production/crops">
                                <img src={pin} alt="" id="item3"/>
                                <p id="item3">Asignar Areas</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Principal;