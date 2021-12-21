import React, { Fragment, useState } from "react";
import Header from "../../components/Header";
import FormCreateCrops from "../../containers/production/FormCreateCrops";
import Vista from "../../components/Location/Vista";

const CreateCrops = () => {
    
    const [currentPredio, setCurrentPredio] = useState({})
    const [predios, setPredios] = useState([]);

    return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <FormCreateCrops />
                        </div>
                        <div className="col">
                            <Vista 
                                setCurrentPredio={setCurrentPredio} 
                                currentPredio={currentPredio} 
                                predios={predios} 
                                setPredios={setPredios}
                                />
                        </div>
                    </div>
                </div>
            </Fragment>
    );
}

export default CreateCrops;