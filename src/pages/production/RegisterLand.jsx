import React, { Fragment } from "react";
import Header from "../../components/Header";
import FormRegistroPredio from "../../containers/production/FormRegisterLand";
import Vista from "../../components/Location/Vista";

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
                        <Vista />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistroPredio;