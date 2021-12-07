import React, { Fragment } from "react";
import "../styles/AsignacionUsuario.scss";
import Header from "./Header"
import Search from "../assets/icons/searcher_magnifyng_glass_search_locate_find_icon_123813.svg"

const AsignacionUsuario = () => {
    return (
        <Fragment>
            <Header/>
            <div className="cuerpoAsign">
                <div>
                    <h1 className="tituloAsign">Asignacion de Predios</h1>
                </div>
                <div className="asignacion">
                    <div id="asignacion-form" className="asignacion-form">
                        <form action="" className="form" >
                            <label htmlFor="codpredio" className="label">Codigo de Predio</label>
                            <div className="buscador">
                                <input type="text" className="input"/>
                                <img src={Search} alt="icon" className="icon"/>
                            </div>

                            <label htmlFor="codusuario" className="label">Codigo de Usuario</label>
                            <div className="buscador">
                                <input type="text" className="input"/>
                                <img src={Search} alt="icon" className="icon"/>
                            </div>

                            <label htmlFor="nombre" className="label">Nombre de Usuario</label>
                            <input type="text" className="input"/>

                            <input type="submit" value="Asignar" className="asignar"/>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AsignacionUsuario;