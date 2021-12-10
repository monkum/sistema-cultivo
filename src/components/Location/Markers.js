import React from "react";
import { Marker } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import cultivos from "../../assets/data/data";


const Markers = () => {
  console.log("datos",cultivos)
  const marcador = cultivos["cultivos"].map((cultivo, i) => (
    <Marker key={i} position={cultivo.geometry} icon={LocationIcon}/>
  ));
  return marcador;
};

export default Markers;
