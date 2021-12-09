import React from "react";
import { Marker } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";


const Markers = (props) => {
  const {cultivos} = props;  
  const marcador = cultivos.map((cultivo, i) => (
    <Marker key={i} position={cultivo.geometry} icon={LocationIcon}/>
  ));
  return marcador;
};

export default Markers;
