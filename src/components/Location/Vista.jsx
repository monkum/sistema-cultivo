import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "../../styles/map/MapVista.css";

const Vista = ({setCurrentPredio, predios, setPredios, currentPredio}) => {
  
  return (
    <MapContainer center={{lat: 6.302007, lng: -74.395482}} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers setCurrentPredio={setCurrentPredio} predios={predios} setPredios={setPredios} currentPredio={currentPredio} />
    </MapContainer>
  );
};

export default Vista;
