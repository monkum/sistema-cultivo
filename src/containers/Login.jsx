import React from "react";
import "../styles/Login.css";
import fondo from "../styles/cultivo.jpg"


const Home = () => {
    return (
        <div className="contenedor">
            <img src={fondo} alt="" />
            <div id="contenedor">
                <div className="titulo">
                    <h1>AGRICOLOMBIA S.A.S.</h1>
                </div>
                <div className="login">
                    <div id="login-form" className="login-form">
                        <form action>
                            <ul>
                                <li className="filas">
                                    <p>
                                        <label htmlFor="user" className="user" /> Usuario:
                                        <input type="text" id="usuario" name="usuario" maxLength={50} />
                                    </p>
                                </li>
                                <li className="filas">
                                    <p>
                                        <label htmlFor="contrasena" />Contraseña:
                                        <input type="password" name="password" id="password" />
                                    </p>
                                </li>
                                <li className="filas">
                                    <p>
                                        <input type="submit" defaultValue="Ingresar" className="ingresar" />
                                    </p>
                                </li>
                            </ul>
                            <div className="small-6 columns text-right">
                                <a href>Olvidaste tu contraseña</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;