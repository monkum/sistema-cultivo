import React, { Fragment, useEffect, useState } from "react";
import "../../styles/production/FormRegisterLand.scss";
import { notification } from "antd";
import { createPredio, updatePredio } from '../../api/predio';

const FormRegistroPredio = ({ currentPredio, setCurrentPredio, predios, setPredios}) => {
    const [predio, setPredio] =  useState({ nombre: '', municipio: '', hectareas: 0, latitud: '', longitud: '' });

    useEffect(() =>{
        if (currentPredio.nombre){
            setPredio(
                {
                    nombre: currentPredio.nombre,
                    municipio: currentPredio.municipio,
                    hectareas: currentPredio.hectareas,
                    latitud: currentPredio.latitud,
                    longitud: currentPredio.longitud
                }
            );
        }
        else {
            console.log("esta vacio el current")
        }
    }, [currentPredio])

    const clear = () => {
        setCurrentPredio({});
        setPredio({ nombre: '', municipio: '', hectareas: 0, latitud: '', longitud: '' });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!predio.nombre || !predio.municipio || !predio.hectareas || !predio.latitud || !predio.longitud ){
            notification.error({
                message: "Todos los campos son obligatorios."
            });
        } else {
            await createPredio(predio).then( (response) => {
                notification["success"]({
                    message: "Predio creado correctamente."
                })
                console.log(response)
                setPredios([...predios, response.predio])
                clear();

            }).catch( () => {
                notification["error"]({
                    message: "Error al crear predio."
                })
            })
            
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!predio.nombre || !predio.municipio || !predio.hectareas || !predio.latitud || !predio.longitud ){
            notification.error({
                message: "Todos los campos son obligatorios."
            });
        } else {
            await updatePredio(predio, currentPredio._id).then( (response) => {
                
                notification["success"]({
                    message: "Predio actualizado correctamente."
                })
                
                
                var new_predios = predios.filter((p) => p._id !== response.predio._id )
                console.log(new_predios)
                setPredios([...new_predios, response.predio])
                clear()

            }).catch( (err) => {
                notification["error"]({
                    message: "Error al actualizar predio."
                })
                console.log(err)
            })

        }
    }


    return (
        <Fragment>
            <div className="predioRegister-contenedor">
                <div className="predioRegister">
                    <div className="predioRegister-form">
                        <form >
                            <div className="row mb-3">
                                <label htmlFor="inputNombre" className="col-sm-4 col-form-label">Nombre del Predio</label>
                                <div className="col-sm-6">
                                    <input type="text" className="nombre" className="form-control" id="inputNombre" value={predio.nombre} onChange={(e) => setPredio({ ...predio, nombre: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputDescripcion" className="col-sm-4 col-form-label">Municipio</label>
                                <div className="col-sm-6">
                                    <input type="text" className="municipio" className="form-control" id="inputDescripcion" value={predio.municipio} onChange={(e) => setPredio({ ...predio, municipio: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputArea" className="col-sm-4 col-form-label">Hectareas del Predio</label>
                                <div className="col-sm-6">
                                    <input type="text" className="hectareas" className="form-control" id="inputArea" value={predio.hectareas} onChange={(e) => setPredio({ ...predio, hectareas: parseInt(e.target.value)})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputLatitud" className="col-sm-4 col-form-label">Latitud</label>
                                <div className="col-sm-6">
                                    <input type="text" className="latitud" className="form-control" id="inputLatitud" value={predio.latitud} onChange={(e) => setPredio({ ...predio, latitud: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputLongitud" className="col-sm-4 col-form-label">Longitud</label>
                                <div className="col-sm-">
                                    <input type="text" className="longitud" className="form-control" id="inputLongitud" value={predio.longitud} onChange={(e) => setPredio({ ...predio, longitud: e.target.value})}/>
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" onClick={currentPredio.nombre ? handleUpdate : handleSubmit} className="btn predioRegister-button me-md-5">{currentPredio.nombre ? 'Actualizar' : 'Añadir'}</button>
                                <button type="button" className="btn predioRegister-button" onClick={clear}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FormRegistroPredio;