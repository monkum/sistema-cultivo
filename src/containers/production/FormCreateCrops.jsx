import React, { Fragment, useEffect, useState } from "react";
import "../../styles/production/FormCreateCrops.scss";
import { createCosecha } from "../../api/cultivo";
import { getProductos } from "../../api/productoAgricola";
import { notification } from "antd";

const FormCreateCrops = ({predios, setPredios }) => {

    const [productosAgricola, setProductosAgricola ] = useState([])

    useEffect(() => {
        getProductos().then(productos => {
            setProductosAgricola(productos)
        });
      }, []); 


    const [cosecha,setCosecha] = useState ({
        predio:'',
        hectareas:0,
        producto:'',
        nSemillas: 0,
        tiempoCultivo: 0,
        agua: 0,
        fertilizante: 0,
        tiempoRecoleccion: 0,
        productoRecolectado: 0,
        tiempoProxSiembra: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!cosecha.predio ||
            !cosecha.hectareas ||
            !cosecha.producto || 
            !cosecha.nSemillas || 
            !cosecha.tiempoCultivo || 
            !cosecha.agua ||
            !cosecha.fertilizante ||
            !cosecha.tiempoRecoleccion ||
            !cosecha.productoRecolectado ||
            !cosecha.tiempoProxSiembra
            
            ){
            notification.error({
                message: "Todos los campos son obligatorios."
            });
            
            console.log(cosecha)

        } else {
            
            console.log(cosecha)

            await createCosecha(cosecha).then( (response) => {
                notification["success"]({
                    message: "Cosecha creada correctamente."
                })
                console.log(response)
                clear();

            }).catch( () => {
                notification["error"]({
                    message: "Error al crear la cosecha."
                })
            })
            
        }
    }

    const clear = () => {
        setCosecha({
            predio:'',
            hectareas:0,
            producto:'',
            nSemillas: 0,
            tiempoCultivo: 0,
            agua: 0,
            fertilizante: 0,
            tiempoRecoleccion: 0,
            productoRecolectado: 0,
            tiempoProxSiembra: 0
        })
    }

    return (
        <Fragment>
            <div className="predioRegister-contenedor">
                <div className="predioRegister">
                    <div className="predioRegister-form">
                        <form action="">
                            <div className="col-md-10">
                                <label htmlFor="inputPredio" className="form-label">Escoger Predio</label>
                                <select id="inputPredio" className="form-select" defaultValue={cosecha.predio} onChange={ (e) => setCosecha({...cosecha, predio: e.target.value} ) } required>
                                    <option value="0">Escoge un Predio </option>
                                    { predios.map( (predio, i) => <option key={i} value={predio._id}>{predio.nombre}</option> )}
                                </select>
                            </div>
                            <br />
                            <div className="row mb-3">
                                <label htmlFor="inputHectareas" className="col-sm-4 col-form-label">Asignar Areas -hectareas-</label><div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputHectareas" value={cosecha.hectareas} onChange={(e) => setCosecha({ ...cosecha, hectareas: parseInt(e.target.value)})} required />
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputPredio" className="form-label">Escoger Producto Agricola</label>
                                <select id="inputPredio" className="form-select" defaultValue={cosecha.producto} onChange={ (e) => setCosecha({...cosecha, producto: e.target.value} ) }>
                                    <option value="0">Escoge un Producto Agricola </option>
                                    { productosAgricola.map( (producto, i) => <option key={i} value={producto._id}>{producto.nombre} </option> ) }
                                </select>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputCantSemillas" className="form-label">Proyeccion Cantidad de Semillas</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputCantSemillas" value={cosecha.nSemillas} onChange={(e) => setCosecha({ ...cosecha, nSemillas: parseInt(e.target.value)})} required/>
                                    <span className="input-group-text" id="basic-addon2">/ha</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputTimeCultivo" className="form-label">Tiempo Proyectado de cultivo</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputTimeCultivo" value={cosecha.tiempoCultivo} onChange={(e) => setCosecha({ ...cosecha, tiempoCultivo: parseInt(e.target.value)})} required/>
                                    <span className="input-group-text" id="basic-addon2">semanas</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputAgua" className="form-label">Proyeccion Cantidad de Agua</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputAgua" value={cosecha.agua} onChange={(e) => setCosecha({ ...cosecha, agua: parseInt(e.target.value)})} required/>
                                    <span className="input-group-text" id="basic-addon2">m3/semana</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputFertilizante" className="form-label">Proyeccion Cantidad de Fertilizante</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputFertilizante" value={cosecha.fertilizante} onChange={(e) => setCosecha({ ...cosecha, fertilizante: parseInt(e.target.value)})} required/>
                                    <span className="input-group-text" id="basic-addon2">kg/ha/semana</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputTimeRecolec" className="form-label">Proyeccion Tiempo de Recolección</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputTimeRecolec" value={cosecha.tiempoRecoleccion} onChange={(e) => setCosecha({ ...cosecha,tiempoRecoleccion: parseInt(e.target.value)})} required/>
                                    <span className="input-group-text" id="basic-addon2">semanas</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputProdRecolec" className="form-label">Proyeccion de Cantidad Recolectada</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputProdRecolec" value={cosecha.productoRecolectado} onChange={(e) => setCosecha({ ...cosecha,productoRecolectado: parseInt(e.target.value)})} required/>
                                    <span className="input-group-text" id="basic-addon2">kg/ha</span>
                                </div>
                            </div>
                            <br />
                            <div className="col-md-10">
                                <label htmlFor="inputProxSiembra" className="form-label">Tiempo Proyectado para Proxima Siembra</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputProxSiembra" value={cosecha.tiempoProxSiembra} onChange={(e) => setCosecha({ ...cosecha,tiempoProxSiembra: parseInt(e.target.value)})} required/>
                                    <span className="input-group-text" id="basic-addon2">semanas</span>
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                <button type="submit" onClick={handleSubmit} className="btn predioRegister-button me-md-5">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FormCreateCrops;