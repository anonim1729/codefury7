import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ShowDisaster = () => {
  const { id } = useParams();
  const [disaster, setDisaster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let API_URL = "http://localhost:3000";

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
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!disaster) {
    return <div className="text-center text-gray-500">Disaster not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Disaster Details</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-blue-500">{disaster.name}</h3>
        <p className="text-gray-700">Date: {new Date(disaster.occuredOn).toLocaleDateString()}</p>
        <p className="text-gray-700">Location: {disaster.location}</p>
        <p className="text-gray-700">Severity: {disaster.severity}/10</p>
        <p className="text-gray-700">Description: {disaster.description}</p>
        {disaster.damageCost !== undefined && (
          <p className="text-gray-700">Damage Cost: ${disaster.damageCost.toLocaleString()}</p>
        )}
        {disaster.casualties > 0 && (
          <p className="text-gray-700">Casualties: {disaster.casualties}</p>
        )}
        <p className="text-gray-500 text-sm">
          Verified: {disaster.isVerified ? 'Yes' : 'No'}
        </p>
      </div>
      <div className="flex space-x-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={() => navigate(`/disaster/update/${disaster._id}`)}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(disaster._id)}
              >
                Delete
              </button>
            </div>
    </div>
  );
};

export default ShowDisaster;
