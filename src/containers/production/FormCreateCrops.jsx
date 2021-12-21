import React, { Fragment } from "react";
import "../../styles/production/FormCreateCrops.scss";

const FormCreateCrops = () => {
    return (
        <Fragment>
            <div className="predioRegister-contenedor">
                <div>
                    <h1 className="predioRegister-titulo">Crear Cosecha</h1>
                </div>
                <div className="predioRegister">
                    <div className="predioRegister-form">
                        <form action="">
                            <div className="col-md-10">
                                <label htmlFor="inputPredio" className="form-label">Escoger Predio</label>
                                <select id="inputPredio" className="form-select">
                                    <option selected>Escoger Predio</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <br />
                            <div className="row mb-3">
                                <label htmlFor="inputHectareas" className="col-sm-4 col-form-label">Asignar Areas -hectareas-</label><div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputHectareas" required />
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputPredio" className="form-label">Escoger Cultivo</label>
                                <select id="inputPredio" className="form-select">
                                    <option selected>Escoger Cultivo</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label for="inputCantSemillas" className="form-label">Proyeccion Cantidad de Semillas</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputCantSemillas" />
                                    <span className="input-group-text" id="basic-addon2">/ha</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label for="inputTimeCultivo" className="form-label">Tiempo Proyectado de cultivo</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputTimeCultivo" />
                                    <span className="input-group-text" id="basic-addon2">semanas</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label for="inputAgua" className="form-label">Proyeccion Cantidad de Agua</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputAgua" />
                                    <span className="input-group-text" id="basic-addon2">m3/semana</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label for="inputFertilizante" className="form-label">Proyeccion Cantidad de Fertilizante</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputFertilizante" />
                                    <span className="input-group-text" id="basic-addon2">kg/ha/semana</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label for="inputTimeRecolec" className="form-label">Proyeccion Tiempo de Recolección</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputTimeRecolec" />
                                    <span className="input-group-text" id="basic-addon2">semanas</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label for="inputProdRecolec" className="form-label">Proyeccion de Cantidad Recolectada</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputProdRecolec" />
                                    <span className="input-group-text" id="basic-addon2">kg/ha</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label for="inputProxSiembra" className="form-label">Tiempo Proyectado para Proxima Siembra</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputProxSiembra" />
                                    <span className="input-group-text" id="basic-addon2">semanas</span>
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" className="btn predioRegister-button me-md-5">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FormCreateCrops;