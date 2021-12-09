import React, { Fragment } from "react";
import Header from "../../components/Header";
import FormCreateCrops from "../../containers/production/FormCreateCrops";
import MapVista from "../../components/map/MapVista";

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
                            <MapVista />
                        </div>
                    </div>
                </div>
            </Fragment>
    );
}

export default CreateCrops;