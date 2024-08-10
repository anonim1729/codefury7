import React from 'react';
import { Link } from 'react-router-dom';
import naturaldisasters from '../../data/disasters.json';

const NaturalDisasters = () => {
    return (
        <div className="flex flex-wrap justify-center p-4">
            {naturaldisasters.map((disaster) => (
                <div
                    key={disaster.id} // Use the id as the key
                    className="bg-white shadow-lg rounded-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden transition-transform transform hover:scale-105"
                >
                    <img
                        src={`${disaster.imageUrl}`}
                        alt={disaster.disaster}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">{disaster.disaster}</h2>
                        <p className="text-gray-700 text-base mb-4">{disaster.description}</p>
                        <Link
                            to={`/disasters/${disaster.id}`} // Use the id for the route
                            className="text-blue-500 hover:underline"
                        >
                            Know More...
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NaturalDisasters;
