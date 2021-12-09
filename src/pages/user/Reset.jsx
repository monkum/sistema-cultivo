import React, { Fragment } from "react";
import "../../styles/user/Reset.scss";
import Header from "../../components/Header"; 

const Reset = () => {
    return (
        <Fragment>
            <Header />
            <div className="resetPassword-contenedor">
                <div>
                    <h1 className="resetPassword-titulo">Cambiar Contraseña</h1>
                </div>
                <div>
                    <h3 className="resetPassword-subtitulo">Introduce tu dirección de correo electrónico de recuperación</h3>
                </div>
                <div className="resetPassword">
                    <div className="resetPassword-form">
                        <form action="">
                            <div className="row mb-3">
                                <label for="inputEmail" className="col-sm-4 col-form-label">Correo Electronico</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputEmail" required />
                                </div>
                            </div>
                            <br />
                            <div className="col-12 text-center">
                                <button type="submit" className="btn resetPassword-button">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Reset;