// import * as L from "https://esm.sh/leaflet";
// import * as L from "https://cdn.skypack.dev/leaflet";
import * as L from "https://cdn.skypack.dev/-/leaflet@v1.7.1-mWLWyNC7pE5Vtv8I45DN/dist=es2020/leaflet.js";

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
