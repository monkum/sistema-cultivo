import React, { Fragment } from "react";
import "../styles/ConfigurarCultivo.scss";
import Header from "./Header";

const ConfigurarCultivo = () => {
    return (
        <Fragment>
            <Header />
            <div className="configCultivo-contenedor">
                <div>
                    <h1 className="configCultivo-titulo">Configurar Cultivo</h1>
                </div>
                <div className="configCultivo-card">
                    <div className="card">
                        <div className="card-body">
                            <p>Área: </p>
                            <p>Ubicación: </p>
                        </div>
                    </div>
                </div>
                <div className="configCultivo-form">
                    <form action="" className="row g-3">
                        <div className="col-md-3">
                            <label for="inputTipo" className="form-label">Tipo de cultivo</label>
                            <select id="inputTipo" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label for="inputCantSemillas" className="form-label">Cantidad de semillas</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputCantSemillas" />
                                <span className="input-group-text" id="basic-addon2">/ha</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputTimeCultivo" className="form-label">Tiempo de cultivo</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputTimeCultivo" />
                                <span className="input-group-text" id="basic-addon2">semanas</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputAgua" className="form-label">Agua</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputAgua" />
                                <span className="input-group-text" id="basic-addon2">m3/semana</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputFertilizante" className="form-label">Fertilizante</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputFertilizante" />
                                <span className="input-group-text" id="basic-addon2">kg/ha/semana</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputTimeRecolec" className="form-label">Tiempo de recolección</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputTimeRecolec" />
                                <span className="input-group-text" id="basic-addon2">/ha</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputProdRecolec" className="form-label">Producto recolectado</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputProdRecolec" />
                                <span className="input-group-text" id="basic-addon2">kg/ha</span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="inputProxSiembra" className="form-label">Tiempo próxima siembra</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputProxSiembra" />
                                <span className="input-group-text" id="basic-addon2">días</span>
                            </div>
                        </div>
                        <div className="col-12"></div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn configCultivo-button">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default ConfigurarCultivo;