import React, { Fragment, useState } from "react";
import "../../styles/production/FormRegisterLand.scss";
import { notification } from "antd";
import { createPredio } from '../../api/predio';

const FormRegistroPredio = ({ currentId, setCurrentId }) => {
    const [predio, setPredio] =  useState({ nombre: '', municipio: '', hectareas: '', latitud: '', longitud: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!predio.nombre || !predio.municipio || !predio.hectareas || !predio.latitud || !predio.longitud ){
            notification.error({
                message: "Todos los campos son obligatorios."
            });
        } else {
            const result = createPredio(predio);
            notification["success"]({
                message: "Predio registrado correctamente."
            })
        }

        console.log(predio)
/*
        if(currentId){
            updatePredio(currentId, predio);
            clear();
        } else {
            createPredio(predio);
            clear();
        } */
    }

    const clear = () => {
        /* setCurrentId(null); */
        setPredio({ nombre: '', municipio: '', hectareas: '', latitud: '', longitud: '' });
    }

    return (
        <Fragment>
            <div className="predioRegister-contenedor">
                <div>
                    <h1 className="predioRegister-titulo">Registro de Predio</h1>
                </div>
                <div className="predioRegister">
                    <div className="predioRegister-form">
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label htmlFor="inputNombre" className="col-sm-4 col-form-label">Nombre del Predio</label>
                                <div className="col-sm-8">
                                    <input type="text" className="nombre" className="form-control" id="inputNombre" value={predio.nombre} onChange={(e) => setPredio({ ...predio, nombre: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputDescripcion" className="col-sm-4 col-form-label">Municipio</label>
                                <div className="col-sm-8">
                                    <input type="text" className="municipio" className="form-control" id="inputDescripcion" value={predio.municipio} onChange={(e) => setPredio({ ...predio, municipio: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputArea" className="col-sm-4 col-form-label">Hectareas del Predio</label>
                                <div className="col-sm-8">
                                    <input type="text" className="hectareas" className="form-control" id="inputArea" value={predio.hectareas} onChange={(e) => setPredio({ ...predio, hectareas: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputLatitud" className="col-sm-4 col-form-label">Latitud</label>
                                <div className="col-sm-8">
                                    <input type="text" className="latitud" className="form-control" id="inputLatitud" value={predio.latitud} onChange={(e) => setPredio({ ...predio, latitud: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputLongitud" className="col-sm-4 col-form-label">Longitud</label>
                                <div className="col-sm-8">
                                    <input type="text" className="longitud" className="form-control" id="inputLongitud" value={predio.longitud} onChange={(e) => setPredio({ ...predio, longitud: e.target.value})}/>
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button htmltype="submit" className="btn predioRegister-button me-md-5">{currentId ? 'Editar' : 'Añadir'}</button>
                                <button className="btn predioRegister-button" onClick={clear}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FormRegistroPredio;