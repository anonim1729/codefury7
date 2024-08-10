import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useGeolocation } from '../contexts/GeolocationContext';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const UserLocation = () => {
    const { latitude, longitude, error } = useGeolocation();

    return (
        <div className="mt-6">
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : latitude && longitude ? (
                <MapContainer
                    center={[latitude, longitude]}
                    zoom={13}
                    className="w-full h-96 rounded-lg shadow-md"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[latitude, longitude]}>
                        <Popup>You are here</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Loading your location...</p>
            )}
        </div>
    );
};

export default UserLocation;
