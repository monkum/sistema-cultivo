import React, { Fragment, useState } from "react";
import "../../styles/production/CreateFarm.scss";
import Header from "../../components/Header";
import { notification } from "antd";
import { createProductoAgricola } from "../../api/productoAgricola";

const CreateFarm = () => {

    const [producto, setProducto] =  useState({ nombre: '', valorSemilla: 0, valorAgua: 0, valorFertilizanteHectarea: 0 });
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!producto.nombre ||
            !producto.valorSemilla ||
            !producto.valorAgua || 
            !producto.valorFertilizanteHectarea
            ){
            notification.error({
                message: "Todos los campos son obligatorios."
            });
        } else {
            
            await createProductoAgricola(producto).then( (response) => {
                notification["success"]({
                    message: "Producto Agricola creado correctamente."
                })
                clear();

            }).catch( () => {
                notification["error"]({
                    message: "Error al crear Producto Agricola."
                })
            })
        }
    }

    const clear = () => {
        setProducto({ nombre: '', valorSemilla: 0, valorAgua: 0, valorFertilizanteHectarea: 0 });
    }

    return (
        <Fragment>
            <Header />
            <div className="createFarm-contenedor">
                    <div>
                        <h1 className="createFarm-titulo">Crear Producto Agricola</h1>
                    </div>
                    <div className="createFarm">
                        <div className="createFarm-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label for="inputName" className="col-sm-4 col-form-label">Nombre</label>
                                    <div className="col-sm-8">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            id="inputName" 
                                            value={producto.nombre} onChange={(e) => setProducto({ ...producto, nombre: e.target.value})} 
                                            required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputValueSeed" className="col-sm-4 col-form-label">Valor de Semilla -kg-</label>
                                    <div className="col-sm-8">
                                        <input 
                                            type="valueSeed" 
                                            className="form-control" 
                                            id="inputValueSeed" 
                                            value={producto.valorSemilla} onChange={(e) => setProducto({ ...producto, valorSemilla: e.target.value})} 
                                            required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputValueWater" className="col-sm-4 col-form-label">Valor metro cubico del agua</label>
                                    <div className="col-sm-8">
                                        <input 
                                            type="ValueWater"
                                            className="form-control"
                                            id="inputValueWater"
                                            value={producto.valorAgua} onChange={(e) => setProducto({ ...producto, valorAgua: e.target.value})} 
                                            required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputValueFertilizer" className="col-sm-4 col-form-label">Valor de Fertilizante por hectarea semanal -kg-</label>
                                    <div className="col-sm-8">
                                        <input 
                                            type="ValueFertilizer"
                                            className="form-control"
                                            id="inputValueFertilizer"
                                            value={producto.valorFertilizanteHectarea} onChange={(e) => setProducto({ ...producto, valorFertilizanteHectarea: e.target.value})} 
                                            required />
                                    </div>
                                </div>
                                <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                    <button type="submit" className="btn createFarm-button me-md-5">Crear</button>
                                    <button type="button" className="btn createFarm-button">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}

export default CreateFarm;