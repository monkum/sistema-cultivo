import React, { Component } from 'react';
import '../styles/components/Header.scss';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

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
        
        return (
            <nav>
                <div className="contenedor">
                    <a href="" className="logotipo">AGRICOLOMBIA S.A.S.</a>
                    <navbar>
                        <a href="/dashboard">Menu Principal</a>
                    </navbar>
                    <navbar>
                        <a href="/" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</a>
                    </navbar>
                </div>
            </nav>
        
        
        );
    }
}

export default Header;