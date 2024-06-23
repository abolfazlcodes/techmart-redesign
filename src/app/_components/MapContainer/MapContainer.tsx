"use client";

import { LatLngExpression } from "leaflet";
import { useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../map/map"), {
  ssr: false,
});

const MapContainer = () => {
  const [mapPosition, setMapPosition] = useState<LatLngExpression | null>([
    35.729473, 51.82407,
  ]);
  return <Map setMapPosition={setMapPosition} mapPosition={mapPosition} />;
};

export default MapContainer;
