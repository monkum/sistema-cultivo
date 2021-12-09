import React, { Fragment } from "react";
import "../../styles/production/DeleteCrops.scss";
import Header from "../../components/Header";

const DeleteCrops = () => {
    return (
        <Fragment>
            <Header />
            <div className="Delete-contenedor">
                    <div>
                        <h1 className="Delete-titulo">Eliminar Cultivo</h1>
                    </div>
                    <div className="Delete">
                        <div className="Delete-form">
                            <form action="">
                                <div className="col-md-10">
                                    <label for="inputPredio" className="form-label">Escoger Predio</label>
                                    <select id="inputPredio" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-10">
                                    <label for="inputUser" className="form-label">Escoger Cultivo Asignado</label>
                                    <select id="inputUser" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                
                               
                                <br />
                                <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                    <button type="submit" className="btn Delete-button me-md-5">Eliminar</button>
                                    <button type="submit" className="btn Delete-button">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}

export default DeleteCrops;