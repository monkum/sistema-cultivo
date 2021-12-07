import React, {Fragment} from "react";
import Header from "./Header";
import "../styles/DashboardConfiguracion.scss";

const DashboardConfiguracion = () => {
   return (
        <Fragment>           
            <Header/>
                <div >
                    <h1 className = "m1">Menu Principal</h1>
                    <div className="bloque">
                        <div className="Menu_despegable">
                            <div className="contenedor">

                                <div className="opciones">
                                    <p>Registrar predios</p>
                                    <p className="icono"> + </p>
                                </div>

                                <div className="enlaces">
                                    <a href="registropredio">Registro</a>
                                    <a href="#">Ver predios</a>
                                </div>    
                            </div>

                            <div className="contenedor">
                                <div className="opciones">
                                    <p><a href="login">Asignar predios</a></p>
                                    <p className="icono"> + </p>
                                </div>
                                <div className="enlaces">
                                </div>
                            </div>

                            <div className="contenedor">
                                <div className="opciones">
                                    <p>Crear tipo de cultivo</p>
                                    <p className="icono"> + </p>
                                </div>

                                <div className="enlaces">
                                    <a href="#">Crear</a>
                                    <a href="#">Ver</a>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>   
        </Fragment>
    );

}

export default DashboardConfiguracion;