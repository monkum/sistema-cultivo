import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import cultivos from '../assets/data/data.json';
import Markers from "./Markers";
import "../../node_modules/leaflet/dist/leaflet.css";
import "../styles/MapView.css";

const MapVista = (props) => {
  
  return (
    <MapContainer center={{lat: 4.656032, lng: -74.057427}} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers data ={cultivos}/>
    </MapContainer>
  );
};

export default MapVista;
