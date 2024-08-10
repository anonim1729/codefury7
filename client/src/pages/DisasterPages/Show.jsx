import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from "../../components/Loader";
// import "../../../"
// import "../../../public/loader.css"
let API_URL = "http://localhost:3000";

const Show = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await axios.get(`${API_URL}/disaster`);
        setDisasters(response.data);
      } catch (error) {
        setError('Failed to fetch disaster data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Disaster Reports</h2>
      <ul className="space-y-4">
        {disasters.map((disaster) => (
          <li key={disaster._id} className="p-4 border rounded-lg shadow-md hover:bg-blue-50 transition">
            <Link to={`/disaster/${disaster._id}`} className="block">
              <h3 className="text-xl font-semibold text-blue-500">{disaster.name}</h3>
              {disaster.isVerified && <p className="text-gray-500 text-sm">Verified: Yes</p>}
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Show;
