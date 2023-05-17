import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  const position = [51.505, -0.09]; // Coordonnées de la localisation

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="OpenStreetMap"
      />
      <Marker position={position} />
    </MapContainer>
  );
};

export default Map;