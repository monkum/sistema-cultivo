import L from "leaflet";

export const LocationIcon = L.icon({
  iconUrl: require("../../assets/icons/location_icon.svg"),
  iconRetinaUrl: require("../../assets/icons/location_icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
