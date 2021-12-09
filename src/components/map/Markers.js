import React from "react";
import { Marker } from "react-leaflet";
import { LocationIcon } from "./LocationIcon";
import MarkerPopup from "./MarkerPopup";

const Markers = () => {
  return (
    <><Marker position={{ lat: '4.656032', lng: '-74.057427' }} icon={LocationIcon} /><Marker position={{ lat: '10.969221', lng: '-74.184841' }} icon={LocationIcon} /><Marker position={{ lat: '5.531661', lng: '-74.632852' }} icon={LocationIcon} /><Marker position={{ lat: '8.598170', lng: '-74.057427' }} icon={LocationIcon} /></>
  )
}

export default Markers;
