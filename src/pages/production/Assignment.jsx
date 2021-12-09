import React, { Fragment } from "react";
import "../../styles/production/Assignment.scss";
import Header from "../../components/Header";

const Assignment = () => {
    return (
        <Fragment>
            <Header />
            <div className="AssignUser-contenedor">
                    <div>
                        <h1 className="AssignUser-titulo">Asignación de Predio a Usuario</h1>
                    </div>
                    <div className="AssignUser">
                        <div className="AssignUser-form">
                            <form action="">
                                <div className="col-md-10">
                                    <label for="inputPredio" className="form-label">Codigo de Predio</label>
                                    <select id="inputPredio" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-10">
                                    <label for="inputUser" className="form-label">Codigo de Usuario</label>
                                    <select id="inputUser" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                
                                <div className="col-mb-3">
                                    <label for="inputNombre" className="col-sm-4 col-form-label">Nombre de Usuario</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputNombre" disabled required />
                                    </div>
                                </div>
                                <br />
                                <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                    <button type="submit" className="btn AssignUser-button me-md-5">Asignar</button>
                                    <button type="submit" className="btn AssignUser-button">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </Fragment>
        
        
    );
}

export default Assignment;