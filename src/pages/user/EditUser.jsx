import React, { Fragment, useState } from "react";
import "../../styles/user/EditUser.scss";
import Header from "../../components/Header";
import searchicon from '../../assets/icons/search.svg';

const EditarUsuario = () => {

    const [search, setSearch] = useState('');
    const [usuario, setUsuario] = useState({});
    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState(0);
    const [rol, setRol] = useState('');

    const buscar = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const inputName = document.getElementById('inputName');
        const inputCodigo = document.getElementById('inputCodigo');
        const asignRole = document.getElementById('asignRole');
        console.log(user);
        if (user.nombre === search) {
            console.log('Entró');
            inputName.value = user.nombre;
            inputCodigo.value = user.id;
            asignRole.value = user.rol;
            setUsuario(user);
        } else {
            alert('Usuario no encontrado');
            inputName.value = '';
            inputCodigo.value = 0;
            asignRole.value = '0';
        }
    }

    const editar = (event) => {
        event.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const userCorreo = user.correo;
        const userPassword = user.password;
        if (rol === '') {
            const userRol = user.rol;
            localStorage.removeItem('user');
            const newUser = {
                nombre: nombre,
                correo: userCorreo,
                password: userPassword,
                rol: userRol
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            alert('Cambios realizados');
        } else if (nombre === '') {
            const userName = user.nombre;
            localStorage.removeItem('user');
            const newUser = {
                nombre: userName,
                correo: userCorreo,
                password: userPassword,
                rol: rol
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            alert('Cambios realizados');
        } else if (rol === '' && nombre === '') {
            localStorage.setItem('user', JSON.stringify(user));
            alert('No se realizó ningún cambio');
        } else {
            localStorage.removeItem('user');
            const newUser = {
                nombre: nombre,
                correo: userCorreo,
                password: userPassword,
                rol: rol
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            alert('Cambios realizados');
        }
        
    }

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
                                        <input type="text" className="form-control" id="inputSearch" state={search} onChange={(e)=>setSearch(e.target.value)} required />
                                        <a href="" onClick={buscar}>
                                            <img src={searchicon} alt="searchicon" className="input-group-text" id="inputGroup-sizing-sm" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputName" className="col-sm-4 col-form-label">Nombre</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputName" state={nombre} onChange={(e)=>setNombre(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputCodigo" className="col-sm-4 col-form-label">Código</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputCodigo" state={codigo} onChange={(e)=>setCodigo(e.target.value)} disabled required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="asignRole" className="col-sm-4 col-form-label">Asignar Rol</label>
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
                                <button type="submit" className="btn userEdit-button me-md-5" onClick={editar}>Editar</button>
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