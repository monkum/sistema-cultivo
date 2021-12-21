import React, { Fragment } from "react";
import Header from "../../components/Header";
import "../../styles/dashboard/Dashboard.scss";
import indicador from "../../assets/logos/indicadores.jpg"

const Principal = () => {

    return (
        <Fragment>
            <Header/>
            <div>
                <h1 className="userRegister-titulo">Tu nos inspiras!</h1>
            </div>
            <section className="contenedor sobre-nosotros">
                
                <div className="container">
                    <div className="row">
                        <div className="col col1">
                            <img src={indicador} alt="usericon" class="imagen-about-us"/>
                        </div>
                        <div className="col col2">
                            <div className="contenido-textos">
                                <h3>Indicadores</h3>
                                <p>Operamos el Cultivo de Palmas Aceiteras. Fundada en Noviembre/2006, empleamos a 115 personas.</p>
                                <h3>Ubicacion</h3>
                                <p>Cl 72 9-55 Of 504 Bogotá D.C.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Principal;