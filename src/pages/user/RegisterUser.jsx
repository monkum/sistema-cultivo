import React, { Fragment } from "react";
import "../../styles/user/RegisterUser.scss";
import Header from "../../components/Header";

const RegisterUser = () => {
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
                                <label for="inputName" className="col-sm-4 col-form-label">Nombre</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputName" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail" className="col-sm-4 col-form-label">Correo Electronico</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputEmail" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Contraseña</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword2" className="col-sm-4 col-form-label">Repetir Contraseña</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword2" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="asignRole" className="col-sm-4 col-form-label">Asignacion de Rol</label>
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
                                <button type="submit" className="btn userRegister-button me-md-5">Registrar</button>
                                <button type="submit" className="btn userRegister-button">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegisterUser;