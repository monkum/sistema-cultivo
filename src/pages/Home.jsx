import React, { useRef } from "react";
import "../styles/Home.scss";
import fondo from "../assets/logos/cultivo.jpg"


const Home = () => {
    const form = useRef(null);
    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
    
        const newUser = {};
        fd.forEach((value, key) => {
          newUser[key] = value;
        });
        console.log("nuevo",newUser);
    };
    return (
        <div className="contenedor">
            <img src={fondo} alt="" className="fondo"/>
            <div className="loginContenedor">
                <div className="titulo">
                    <h1 className="h1">AGRICOLOMBIA S.A.S.</h1>
                </div>
                <div className="login">
                    <div id="login-form" className="login-form">
                        <form ref={form} onSubmit={submitForm}>
                            <ul>
                                <li className="filas">
                                    <p>
                                        <label htmlFor="user" className="user" /> Usuario:
                                        <input type="text" className="usuario" name="usuario" maxLength={50} />
                                    </p>
                                </li>
                                <li className="filas">
                                    <p>
                                        <label htmlFor="contrasena" />Contraseña:
                                        <input type="password" name="password" className="password" />
                                    </p>
                                </li>
                                <li className="filas">
                                    <p>
                                        <input type="submit" defaultValue="Ingresar" className="ingresar" />
                                    </p>
                                </li>
                            </ul>
                            <div className="small-6 columns text-right">
                                <a href="/admin/reset" className="olvido">Olvidaste tu contraseña</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;