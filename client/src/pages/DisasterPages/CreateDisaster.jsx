import React from 'react';
import {useState} from 'react'
import { toast } from 'react-toastify';
import axios from "axios"
let API_URL="http://localhost:3000";
const Create = () => {

    const [formData, setFormData] = useState({
        name: '',
        occuredOn: '',
        location: '',
        severity: '',
        description: ''
      });
    
      const handleOnChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
      
        try {
          const response = await axios.post(`${API_URL}/disaster/new`, formData, {
            headers: {
              'Content-Type': 'application/json',
               // If you need to pass a token
            },
          });
      
          toast.success("Disaster report created successfully!");
        //   setUser(response.data.email); 
        } catch (error) {
          toast.error("Failed to create disaster report. Please try again.");
          console.error('Error submitting disaster report:', error);
          localStorage.removeItem('token');
        }
      
        setFormData({
          name: '',
          occuredOn: '',
          location: '',
          severity: '',
          description: ''
        });
      };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Create Disaster Report</h2>

      <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
    Disaster Name
  </label>
  <select
    id="name"
    name="name"
    value={formData.name}
    onChange={handleOnChange}
    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
  >
    <option value="" disabled>Select disaster type</option>
    <option value="Earthquake">Earthquake</option>
    <option value="Tsunami">Tsunami</option>
    <option value="Cyclone">Cyclone</option>
    <option value="Flood">Flood</option>
    <option value="Landslide">Landslide</option>
    <option value="Cloudburst">Cloudburst</option>
    <option value="Forest Fire">Forest fire</option>
  </select>
</div>


      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occuredOn">
          Occurred On
        </label>
        <input
          id="occuredOn"
          name="occuredOn"
          type="date"
          value={formData.occuredOn}
          onChange={handleOnChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleOnChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="severity">
          Severity (1-10)
        </label>
        <input
          id="severity"
          name="severity"
          type="number"
          min="1"
          max="10"
          placeholder="Enter severity"
          value={formData.severity}
          onChange={handleOnChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleOnChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
        >
          Create Report
        </button>
      </div>
    </form>
    </div>
  );
}

export default Create;
