import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./ContactMap.css";
import { FaInfo, FaInfoCircle } from "react-icons/fa";

const ContactMap = () => {
  const [showInfo, setShowInfo] = useState(false);
  const position = [30.26688, 78.06089];
  const zoomLevel = 15;

  return (
    <div className="contact-map">
      <button onClick={() => setShowInfo(!showInfo)}>
        <FaInfoCircle />
      </button>

      {showInfo && (
        <div onClick = {() => setShowInfo(false)} className="contact-map-info">
          <p> Mangal Tithi Studio </p>
          <p> Nawada, Haripur, Dehradun </p>
          <p> negisachin750@gmail.com </p>
        </div>
      )}

      <MapContainer
        attributionControl={false}
        zoom={zoomLevel}
        center={position}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup> ✨ Mangal Tithi Studio, Nawada Haripur ✨</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
