import React, { Fragment } from "react";
import "../../styles/production/FormCreateCrops.scss";

const FormCreateCrops = () => {
    return (
        <Fragment>
            <div className="predioRegister-contenedor">
                <div>
                    <h1 className="predioRegister-titulo">Crear Cultivo</h1>
                </div>
                <div className="predioRegister">
                    <div className="predioRegister-form">
                        <form action="">
                            <div className="col-md-10">
                                <label htmlFor="inputPredio" className="form-label">Escoger Predio</label>
                                <select id="inputPredio" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <label htmlFor="inputHectareas" className="col-sm-4 col-form-label">Asignar Areas -hectareas-</label>
                            <br />
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputHectareas" required />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <label htmlFor="inputPredio" className="form-label">Escoger Cultivo a Sembrar</label>
                                <select id="inputPredio" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" className="btn predioRegister-button me-md-5">Crear</button>
                                <button type="submit" className="btn predioRegister-button">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FormCreateCrops;