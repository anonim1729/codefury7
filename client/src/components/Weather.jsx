import { useEffect, useState } from 'react';
import UserLocation from '../components/UserLocation';
import { useGeolocation } from '../contexts/GeolocationContext';

const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const WEATHER_URL = import.meta.env.VITE_WEATHER_URL;

const Weather = () => {
    const { latitude, longitude, accuracy, error } = useGeolocation();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(`${WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}`);
                const data = await res.json();
                setWeatherData(data);
            } catch (error) {
                console.log(error);
            }
        }

        if (latitude !== null && longitude !== null && typeof latitude === 'number' && typeof longitude === 'number') {
            fetchWeather();
        }
    }, [longitude, latitude]);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center">You Are Here</h1>
                {error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <>
                        <div className="text-gray-700 space-y-2 mb-6 text-center">
                            <p><span className="font-semibold">Latitude:</span> {latitude}</p>
                            <p><span className="font-semibold">Longitude:</span> {longitude}</p>
                            <p><span className="font-semibold">Accuracy:</span> {accuracy} meters</p>
                        </div>
                        <UserLocation />
                        {weatherData && (
                            <div className="mt-6">
                                <h2 className="text-xl font-semibold text-blue-500 text-center mb-4">Current Weather in {weatherData.name}, {weatherData.sys.country}</h2>
                                <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-inner space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                            alt="Weather Icon"
                                            className="w-16 h-16"
                                        />
                                        <p className="text-4xl font-bold text-gray-700">
                                            {Math.round(weatherData.main.temp - 273.15)}&deg;C
                                        </p>
                                    </div>
                                    <p className="text-lg text-gray-600 capitalize">{weatherData.weather[0].description}</p>
                                    <div className="flex flex-wrap justify-around w-full mt-4 text-gray-700">
                                        <div className="text-center">
                                            <p className="font-semibold">Humidity</p>
                                            <p>{weatherData.main.humidity}%</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="font-semibold">Pressure</p>
                                            <p>{weatherData.main.pressure} hPa</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="font-semibold">Wind</p>
                                            <p>{weatherData.wind.speed} m/s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Weather;
