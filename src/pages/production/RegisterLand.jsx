import React, { Fragment } from "react";
import Header from "../../components/Header";
import FormRegistroPredio from "../../containers/production/FormRegisterLand";
import MapVista from "../../components/map/MapVista";

const RegistroPredio = () => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FormRegistroPredio />
                    </div>
                    <div className="col">
                        <MapVista />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistroPredio;