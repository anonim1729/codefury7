import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import AdditionalInfo from '../../components/AdditionalInfo';

const ShowDisaster = () => {
  const { id } = useParams();
  const [disaster, setDisaster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchDisaster = async () => {
      try {
        const response = await axios.get(`${API_URL}/disaster/${id}`);
        setDisaster(response.data);
      } catch (error) {
        setError('Failed to fetch disaster data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDisaster();
  }, [id]);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!disaster) {
    return <div className="text-center text-gray-500">Disaster not found.</div>;
  }

  return (<>
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-blue-200">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Disaster Details</h2>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-blue-600">{disaster.name}</h3>
        <p className="text-gray-600 mt-2">Date: {new Date(disaster.occuredOn).toLocaleDateString()}</p>
        <p className="text-gray-600 mt-1">Location: {disaster.location}</p>
        <p className="text-gray-600 mt-1">Severity: {disaster.severity}/10</p>
        <p className="text-gray-600 mt-1">Description: {disaster.description}</p>
        {disaster.damageCost !== undefined && (
          <p className="text-gray-600 mt-1">Damage Cost: ${disaster.damageCost.toLocaleString()}</p>
        )}
        {disaster.casualties > 0 && (
          <p className="text-gray-600 mt-1">Casualties: {disaster.casualties}</p>
        )}
        <p className="text-gray-500 text-sm mt-4">
          Verified: <span className={disaster.isVerified ? "text-green-600" : "text-red-600"}>{disaster.isVerified ? 'Yes' : 'No'}</span>
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => navigate(`/disaster/update/${disaster._id}`)}
        >
          Update
        </button>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
          onClick={() => handleDelete(disaster._id)}
        >
          Delete
        </button>
      </div>
    </div>
      <AdditionalInfo disas={disaster.name}/>
  </>);
  
};

export default ShowDisaster;
