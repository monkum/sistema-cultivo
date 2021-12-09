import React, { Fragment } from "react";
import "../../styles/production/FormRegisterLand.scss";

const FormRegistroPredio = () => {
    return (
        <Fragment>
            <div className="predioRegister-contenedor">
                <div>
                    <h1 className="predioRegister-titulo">Registro de Predio</h1>
                </div>
                <div className="predioRegister">
                    <div className="predioRegister-form">
                        <form action="">
                            <div className="row mb-3">
                                <label htmlFor="inputNombre" className="col-sm-4 col-form-label">Nombre del Predio</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputNombre" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputDescripcion" className="col-sm-4 col-form-label">Descripcion</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputDescripcion" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputArea" className="col-sm-4 col-form-label">Area -hectareas-</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputArea" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputLatitud" className="col-sm-4 col-form-label">Latitud</label>
                                <div className="col-sm-8">
                                    <input type="latitud" className="form-control" id="inputLatitud" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputLongitud" className="col-sm-4 col-form-label">Longitud</label>
                                <div className="col-sm-8">
                                    <input type="longitud" className="form-control" id="inputLongitud" required />
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" className="btn predioRegister-button me-md-5">Añadir</button>
                                <button type="submit" className="btn predioRegister-button me-md-5">Editar</button>
                                <button type="submit" className="btn predioRegister-button">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FormRegistroPredio;