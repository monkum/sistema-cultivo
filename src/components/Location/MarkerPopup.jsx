import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = ({name}) => {
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  );
};

export default MarkerPopup;
