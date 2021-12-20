import React, { Fragment } from "react";
import Header from "../../components/Header";
import FormRegistroPredio from "../../containers/production/FormRegisterLand";
import Vista from "../../components/Location/Vista";
import "../../styles/production/Container.scss"

const RegistroPredio = () => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col1">
                        <FormRegistroPredio />
                    </div>
                    <div className="col col2">
                        <Vista />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistroPredio;