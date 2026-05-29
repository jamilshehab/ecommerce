"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export default function FullWidthMap() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "/marker-icon-2x.png",
      iconUrl: "/marker-icon.png",
      shadowUrl: "/marker-shadow.png",
    });
  }, []);

  return (
    <div className="w-full h-[80vh] md:h-[85vh]">
      <MapContainer
        center={[33.8972, 35.4823]} // 🇱🇧 Hamra Street
        zoom={15}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[33.8972, 35.4823]}>
          <Popup>Hamra Street 📍 Beirut</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
