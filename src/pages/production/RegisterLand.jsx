import React, { Fragment, useState } from "react";
import Header from "../../components/Header";
import FormRegistroPredio from "../../containers/production/FormRegisterLand";
import Vista from "../../components/Location/Vista";
import "../../styles/production/Container.scss"

const RegistroPredio = () => {

    //const [currentId, setCurrentId ] = useState("")
    const [currentPredio, setCurrentPredio] = useState({})
    const [predios, setPredios] = useState([]);

    return (
        <Fragment>
            <Header />
            <div>
                <h1 className="predioRegister-titulo">Registro de Predio</h1>
            </div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col1">
                        <FormRegistroPredio 
                            currentPredio={currentPredio} 
                            setCurrentPredio={setCurrentPredio} 
                            predios={predios} 
                            setPredios={setPredios}
                            />
                    </div>
                    <div className="col col2">
                        <Vista 
                            setCurrentPredio={setCurrentPredio} 
                            currentPredio={currentPredio} 
                            predios={predios} 
                            setPredios={setPredios}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default RegistroPredio;