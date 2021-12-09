import React, { Fragment } from "react";
import Header from "../../components/Header";
import FormCreateCrops from "../../containers/production/FormCreateCrops";
import Vista from "../../components/Location/Vista";

const CreateCrops = () => {
    return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <FormCreateCrops />
                        </div>
                        <div className="col">
                            <Vista />
                        </div>
                    </div>
                </div>
            </Fragment>
    );
}

export default CreateCrops;