import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import cultivos from "../../assets/data/data";
import { getPredios } from "../../api/predio";


const Markers = ({setCurrentPredio, predios, setPredios, currentPredio}) => {

  useEffect(() => {
    getPredios().then(predios => {
      setPredios(predios)
    });
  }, [currentPredio]); 

  const marcador = predios.map((predio, i) => (
    <Marker
    key={predio._id}
    position={[ parseFloat(predio.latitud), parseFloat(predio.longitud)]}
    icon={LocationIcon}
    eventHandlers={{
      click: () => {
        setCurrentPredio(predio)
      },
    }}/>
  ));
  return marcador;
};

export default Markers;
