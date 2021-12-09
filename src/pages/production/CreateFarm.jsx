import React from "react";
import "../../styles/production/CreateFarm.scss";
import Header from "../../components/Header";

const CreateFarm = () => {
    return (
        <Fragment>
            <Header />
            <div className="createFarm-contenedor">
                    <div>
                        <h1 className="createFarm-titulo">Crear Cultivo</h1>
                    </div>
                    <div className="createFarm">
                        <div className="createFarm-form">
                            <form action="">
                                <div className="row mb-3">
                                    <label for="inputName" className="col-sm-4 col-form-label">Nombre</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="inputName" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputValueSeed" className="col-sm-4 col-form-label">Valor de Semilla -kg-</label>
                                    <div className="col-sm-8">
                                        <input type="valueSeed" className="form-control" id="inputValueSeed" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputValueWater" className="col-sm-4 col-form-label">Valor metro cubico del agua</label>
                                    <div className="col-sm-8">
                                        <input type="ValueWater" className="form-control" id="inputValueWater" required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputValueFertilizer" className="col-sm-4 col-form-label">Valor de Fertilizante por hectarea semanal -kg-</label>
                                    <div className="col-sm-8">
                                        <input type="ValueFertilizer" className="form-control" id="inputValueFertilizer" required />
                                    </div>
                                </div>
                                <div className="d-grid gap-2 col-5 d-md-flex mx-auto">
                                    <button type="submit" className="btn createFarm-button me-md-5">Crear</button>
                                    <button type="submit" className="btn createFarm-button">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </Fragment>
    );
}

export default CreateFarm;