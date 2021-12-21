import React, { Fragment } from "react";
import "../../styles/production/InputCost.scss";
import Header from "../../components/Header";

const SetUpCrops = () => {
    return (
        <Fragment>
            <Header />
            <div className="configCultivo-contenedor">
                <div>
                    <h1 className="configCultivo-titulo">Ingreso de Insumos y Tiempos</h1>
                </div>
                <div className="configCultivo-form">
                    <form action="" className="row g-3">
                        <div className="col-md-3">
                            <label for="inputCantSemillas" className="form-label">Proyeccion Cantidad de Semillas</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputCantSemillas" />
                                <span className="input-group-text" id="basic-addon2">/ha</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputTimeCultivo" className="form-label">Tiempo Proyectado de cultivo</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputTimeCultivo" />
                                <span className="input-group-text" id="basic-addon2">semanas</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputAgua" className="form-label">Proyeccion Cantidad de Agua</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputAgua" />
                                <span className="input-group-text" id="basic-addon2">m3/semana</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputFertilizante" className="form-label">Proyeccion Cantidad de Fertilizante</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputFertilizante" />
                                <span className="input-group-text" id="basic-addon2">kg/ha/semana</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputTimeRecolec" className="form-label">Proyeccion Tiempo de Recolección</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputTimeRecolec" />
                                <span className="input-group-text" id="basic-addon2">semanas</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputProdRecolec" className="form-label">Proyeccion de Cantidad Recolectada</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputProdRecolec" />
                                <span className="input-group-text" id="basic-addon2">kg/ha</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputProxSiembra" className="form-label">Tiempo Proyectado para Proxima Siembra</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputProxSiembra" />
                                <span className="input-group-text" id="basic-addon2">semanas</span>
                            </div>
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn configCultivo-button">Finalizar y Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default SetUpCrops;