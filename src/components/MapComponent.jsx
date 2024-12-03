// MapComponent.jsx
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import Leaflet marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13); // Default view

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Geocode the address to get latitude and longitude
    const geocodeAddress = async (address) => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const location = [lat, lon];
        map.setView(location, 15); // Set map view to the location

        // Add a marker to the map
        L.marker(location).addTo(map).bindPopup(address).openPopup();
      } else {
        console.error("Address not found");
      }
    };

    geocodeAddress(address);

    return () => {
      map.remove(); // Cleanup map on component unmount
    };
  }, [address]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

export default MapComponent;
