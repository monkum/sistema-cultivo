import React, { useEffect, useState } from "react";
import { Marker, Tooltip } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import { getPredios } from "../../api/predio";
import MarkerPopup from "./MarkerPopup";

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
      
    }}>
      <Tooltip direction="top">{predio.nombre}</Tooltip>
      
    </Marker>
  ));
  return marcador;
};

export default Markers;
