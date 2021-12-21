import React, { Component } from 'react';
import "../styles/Home.scss";
import fondo from "../assets/logos/cultivo.jpg"
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
const validar="http://localhost:3003/usuarios";
const cookies = new Cookies();

class Home extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(validar, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                cookies.set('rol', respuesta.rol, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} `);
                window.location.href="/dashboard";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('usuario')){
            window.location.href="./dashboard";
        }
    }
    

    render() {
        return (
            <div className="contenedor">
                <img src={fondo} alt="" className="fondo"/>
                    <div className="loginContenedor">   
                        <div className="titulo">
                        <h1 className="h1">AGRICOLOMBIA S.A.S.</h1>
                    </div>
                    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
                </div>
            </div>
        );
    }
}

export default Home;