"use client";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Dispatch } from "react";
import { useGeolocation } from "@/app/hooks/useGeolocation";

const myIcon = new Icon({
  iconUrl: "/images/marker.svg",
  iconSize: [25, 25],
});

interface IMapProps {
  setMapPosition: Dispatch<React.SetStateAction<LatLngExpression | null>>;
  mapPosition: LatLngExpression | null;
  zoom?: number;
  isSelectable?: boolean;
}

const Map: React.FC<IMapProps> = ({
  zoom = 16,
  mapPosition,
  setMapPosition,
  isSelectable = false,
}) => {
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  //   useEffect(() => {
  //     if (geoLocationPosition?.lat && geoLocationPosition.lng) {
  //       setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  //     }
  //   }, [geoLocationPosition, setMapPosition]);.

  return (
    <div className="w-full h-full flex-1 relative" onClick={getPosition}>
      <MapContainer
        className="h-full w-full p-2 "
        center={mapPosition as LatLngExpression}
        zoom={zoom}
        scrollWheelZoom={true}
        touchZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; Technology Park'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={mapPosition as LatLngExpression} icon={myIcon}>
          {/* <Popup>شرکت: {"name"}</Popup> */}
        </Marker>

        <ChangeCenter position={mapPosition!} />
        {isSelectable && <DetectClick setMapPosition={setMapPosition} />}
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }: { position: LatLngExpression }) {
  const map = useMap();
  map.setView(position);

  return null;
}

interface IDetectClickProps {
  setMapPosition: Dispatch<React.SetStateAction<LatLngExpression | null>>;
}

const DetectClick: React.FC<IDetectClickProps> = ({ setMapPosition }) => {
  useMapEvents({
    click: (e: LeafletMouseEvent) =>
      setMapPosition([+e?.latlng?.lat, +e?.latlng?.lng]),
  });

  return null;
};

export default Map;
