import React from 'react';
import { useParams } from 'react-router-dom';
import naturaldisasters from '../../data/disasters.json';

const DisasterPrep = () => {
    const { id } = useParams();
    const disaster = naturaldisasters.find(d => d.id == id);

    if (!disaster) {
        return <div className="text-center text-gray-600 text-xl font-medium mt-10">Disaster not found!</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-6 text-center">{disaster.disaster}</h1>
            <img
                src={`${disaster.imageUrl}`}
                alt={disaster.disaster}
                className="w-full h-72 object-cover mb-6 rounded-lg shadow-md"
            />
            <p className="text-gray-800 text-lg leading-relaxed mb-6">{disaster.description}</p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6 shadow-inner">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Preventive Measures</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {disaster.preventive_measures.map((measure, index) => (
                        <li key={index} className="pl-2">{measure}</li>
                    ))}
                </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg shadow-inner">
                <h2 className="text-2xl font-bold text-red-700 mb-4">What to Do During the Disaster</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {disaster.during_disaster.map((action, index) => (
                        <li key={index} className="pl-2">{action}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DisasterPrep;
