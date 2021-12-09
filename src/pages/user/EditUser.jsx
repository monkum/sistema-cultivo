import React, { Fragment } from "react";
import "../../styles/user/EditUser.scss";
import Header from "../../components/Header";
import searchicon from '../../assets/icons/search.svg';

const EditarUsuario = () => {
    return (
        <Fragment>
            <Header />
            <div className="userEdit-contenedor">
                <div>
                    <h1 className="userEdit-titulo">Editar Usuario</h1>
                </div>
                <div className="userEdit">
                    <div className="userEdit-form">
                        <form action="">
                            <div className="row mb-5 justify-content-md-end">
                                <div className="col-sm-6">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" id="inputSearch" required />
                                        <a href="">
                                            <img src={searchicon} alt="searchicon" className="input-group-text" id="inputGroup-sizing-sm" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputName" className="col-sm-4 col-form-label">Nombre</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputName" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputCodigo" className="col-sm-4 col-form-label">Código</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputEmail" disabled required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="asignRole" className="col-sm-4 col-form-label">Asignar Rol</label>
                                <div className="col-sm-3">
                                    <select className="form-select" id="asignRole" required>
                                        <option selected value="1">Rol 1</option>
                                        <option value="2">Rol 2</option>
                                        <option value="3">Rol 3</option>
                                    </select>
                                </div>
                                <div className="invalid-feedback">
                                    Por favor, seleccionar un rol.
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" className="btn userEdit-button me-md-5">Editar</button>
                                <button type="submit" className="btn userEdit-button">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EditarUsuario;