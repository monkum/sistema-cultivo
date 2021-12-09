<<<<<<< HEAD:src/containers/Usuarios.jsx
import React, {Fragment} from "react";
import "../styles/Usuarios.scss";
import Header from './Header';
import adduser from '../assets/icons/add_user_icon_183928.svg';
import edituser from '../assets/icons/edit_profile_user_icon_148629.svg';
=======
import React,  {Fragment} from "react";
import "../../styles/user/DashboardUser.scss";
import Header from '../../components/Header';
import adduser from '../../assets/icons/add_user_icon_183928.svg';
import edituser from '../../assets/icons/edit_profile_user_icon_148629.svg';
>>>>>>> f48d37dfb94260daa38af44e8d0e2f34238f43ed:src/pages/user/DashboardUser.jsx

const Usuarios = () => {
    return (
        <Fragment>
            <Header/>
            <div className="cuerpoGest">
                <div className="titulo">
                    <h1 className="gestionTitle">Gestion de Usuarios</h1>
                </div>
                <div className="opciones">
                    <ul className="listaopc">
                        <li className="contenedoropc">
                            <a href="/admin/register" className="registUser">
                                <img src={adduser} alt="adduser" className="adduser" id="opcion"/>
                                <p className="opcion">Registrar Usuario</p>
                            </a>
                        </li>
                        <li className="contenedoropc">
                            <a href="/admin/edit" className="registUser">
                                <img src={edituser} alt="edituser" className="opcion2"/>
                                <p className="opcion2">Editar Usuario</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Usuarios;