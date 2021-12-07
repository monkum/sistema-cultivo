import React, { Fragment } from "react";
import Header from "./Header";
import FormRegistroPredio from "./FormRegistroPredio";
import MapVista from "../components/MapVista";

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