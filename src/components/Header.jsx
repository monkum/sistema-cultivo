import React, { Component } from 'react';
import '../styles/components/Header.scss';
import { Navbar } from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var condicion_uno = false;
var condicion_dos = false;
var condicion_tres = false;

class Header extends Component {

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        cookies.remove('rol', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        console.log('rol: '+cookies.get('rol'));

    if((cookies.get('rol'))==1){
        condicion_uno = true;
    }

    if((cookies.get('rol'))==2){
        condicion_dos = true;
    }

    if((cookies.get('rol'))==3){
        condicion_tres = true;
    }
        
        return (
            <nav>
                <div className="contenedor">
                    <a href="/dashboard" className="logotipo">AGRICOLOMBIA S.A.S.</a>
                    
                    { condicion_uno && <Navbar>
                        <a href="/production/crops">Crear Cosecha, Ingresar uso de Insumos y Tiempos</a>
                    </Navbar>}
                    { condicion_dos && <Navbar>
                        <a href="/production/register">Registrar Predio</a>
                    </Navbar>}
                    { condicion_dos && <Navbar>
                        <a href="/production/create">Crear Cultivo y Costos</a>
                    </Navbar>}
                    { condicion_dos && <Navbar>
                        <a href="/production/assignment">Asignacion de Usuarios</a>
                    </Navbar>}
                    { condicion_tres && <Navbar>
                        <a href="/admin/register">Registrar Usuario</a>
                    </Navbar>}
                    { condicion_tres && <Navbar>
                        <a href="/admin/edit">Editar y Eliminar Usuario</a>
                    </Navbar>}
                    { condicion_tres && <Navbar>
                        <a href="/report">Reporte de Costos</a>
                    </Navbar>}
                    <Navbar>
                        <a href="/" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</a>
                    </Navbar>
                </div>
            </nav>
        
        
        );
    }
}

export default Header;