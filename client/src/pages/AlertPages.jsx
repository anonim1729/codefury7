import React from 'react';
import UserLocation from '../components/UserLocation';
import { useGeolocation } from '../contexts/GeolocationContext';

const AlertPages = () => {
    const { latitude, longitude, accuracy, error } = useGeolocation();

    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">You Are Here</h1>
                {error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <>
                        <div className="text-gray-700 space-y-2 mb-6 text-center">
                            <p>
                                <span className="font-semibold">Latitude:</span> {latitude}
                            </p>
                            <p>
                                <span className="font-semibold">Longitude:</span> {longitude}
                            </p>
                            <p>
                                <span className="font-semibold">Accuracy:</span> {accuracy} meters
                            </p>
                        </div>
                        <UserLocation />
                    </>
                )}
            </div>
        </div>
    );
};

export default AlertPages;
