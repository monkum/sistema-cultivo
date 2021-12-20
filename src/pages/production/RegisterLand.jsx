import React, { Fragment, useState } from "react";
import Header from "../../components/Header";
import FormRegistroPredio from "../../containers/production/FormRegisterLand";
import Vista from "../../components/Location/Vista";
import "../../styles/production/Container.scss"

const RegistroPredio = () => {

    //const [currentId, setCurrentId ] = useState("")
    const [currentPredio, setCurrentPredio] = useState({})
    
    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col1">
                        <FormRegistroPredio currentPredio={currentPredio} setCurrentPredio={setCurrentPredio}/>
                    </div>
                    <div className="col col2">
                        <Vista setCurrentPredio={setCurrentPredio}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistroPredio;