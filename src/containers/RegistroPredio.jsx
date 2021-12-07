import React, { Fragment } from "react";
import "../styles/RegistroPredio.scss";
import Header from "./Header";

const RegistroPredio = () => {
    return (
        <Fragment>
            <Header />
            <div className="predioRegister-contenedor">
                <div>
                    <h1 className="predioRegister-titulo">Registro de Predio</h1>
                </div>
                <div className="predioRegister">
                    <div className="predioRegister-form">
                        <form action="">
                            <div className="row mb-3">
                                <label for="inputArea" className="col-sm-4 col-form-label">* Area -hectareas-</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputArea" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputLatitud" className="col-sm-4 col-form-label">* Latitud</label>
                                <div className="col-sm-8">
                                    <input type="latitud" className="form-control" id="inputLatitud" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputLongitud" className="col-sm-4 col-form-label">* Longitud</label>
                                <div className="col-sm-8">
                                    <input type="longitud" className="form-control" id="inputLongitud" required />
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" className="btn predioRegister-button me-md-5">Revisar</button>
                                <button type="submit" className="btn predioRegister-button">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistroPredio;