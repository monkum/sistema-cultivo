import React, { Fragment, useState } from "react";
import "../../styles/user/RegisterUser.scss";
import Header from "../../components/Header";

const RegisterUser = () => {

    const [usuario, setUsuario] = useState({});
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [rol, setRol] = useState('');

    const registrar = (event) => {
        event.preventDefault();
        console.log('Entro');
        if (password === password2 && rol !== "0") {
            const user = {
                id: 1,
                nombre: nombre,
                correo: correo,
                password: password,
                rol: rol
            }
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
        }else if (password !== password2) {
            alert('Las contraseñas no coinciden');
        }else if (rol === "0") {
            alert('Debe seleccionar un rol');
        }
        //sino son iguales mandar un alert y si rol=0 enviar otro alert
    }

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
                                    <input type="text" className="form-control" id="inputName" state={nombre} onChange={(e)=>setNombre(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputEmail" className="col-sm-4 col-form-label">Correo Electronico</label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" id="inputEmail" state={correo} onChange={(e)=>setCorreo(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword" className="col-sm-4 col-form-label">Contraseña</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword" state={password} onChange={(e)=>setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword2" className="col-sm-4 col-form-label">Repetir Contraseña</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword2" state={password2} onChange={(e)=>setPassword2(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="asignRole" className="col-sm-4 col-form-label">Asignacion de Rol</label>
                                <div className="col-sm-3">
                                    <select className="form-select" id="asignRole" state={rol} onChange={(e)=>setRol(e.target.value)} required>
                                        <option selected value="0">Seleccionar...</option>
                                        <option value="1">Rol 1</option>
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
                                <button type="submit" className="btn userRegister-button me-md-5" onClick={registrar}>Registrar</button>
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