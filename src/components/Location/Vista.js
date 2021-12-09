import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../styles/map/MapVista.css";
import { cultivos } from "../../assets/data/data.json";

const Vista = () => {
  
  return (
    <Map center={{lat: 4.656032, lng: -74.057427}} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers cultivos={cultivos}/>
    </Map>
  );
};

export default Vista;
