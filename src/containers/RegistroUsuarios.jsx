import React, { Fragment } from "react";
import "../styles/RegistroUsuarios.scss";
import Header from "./Header";

const RegistroUsuarios = () => {
    return (
        <Fragment>
            <Header />
            <div className="userRegister-contenedor">
                <div>
                    <h1 className="userRegister-titulo">Registro de Usuario</h1>
                </div>
                <div className="userRegister">
                    <div className="userRegister-form">
                        <form action="">
                            <div className="row mb-3">
                                <label for="inputName" className="col-sm-4 col-form-label">* Name</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputName" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail" className="col-sm-4 col-form-label">* Email</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputEmail" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword" className="col-sm-4 col-form-label">* Password</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword2" className="col-sm-4 col-form-label">* Re-type password</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword2" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="asignRole" className="col-sm-4 col-form-label">* Asignar Rol</label>
                                <div className="col-sm-3">
                                    <select className="form-select" id="asignRole" required>
                                        <option selected value="1">Rol 1</option>
                                        <option value="2">Rol 2</option>
                                        <option value="3">Rol 3</option>
                                    </select>
                                </div>
                                <div className="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" className="btn userRegister-button me-md-5">Sign up</button>
                                <button type="submit" className="btn userRegister-button">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistroUsuarios;