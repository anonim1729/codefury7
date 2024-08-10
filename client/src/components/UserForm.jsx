import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

const UserForm = () => {
    const { updateUser } = useContext(AuthContext);
    const navigate=useNavigate();
    const [location, setLocation] = useState('');
    const [volunteer, setVolunteer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(location, volunteer,navigate);
        console.log({ location, volunteer });
        setLocation('');
        setVolunteer('');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                <h1 className="text-2xl font-semibold text-blue-500 mb-6">Volunteer Form</h1>

                <div className="mb-6">
                    <label htmlFor="location" className="block text-blue-500 font-semibold mb-2">
                        Select Your Location:
                    </label>
                    <select
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select a location</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </div>

                <div className="mb-8">
                    <span className="block text-blue-500 font-semibold mb-2">
                        Do you want to be a volunteer?
                    </span>
                    <div className="flex justify-center space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="volunteer"
                                value="yes"
                                checked={volunteer === 'yes'}
                                onChange={(e) => setVolunteer(e.target.value)}
                                className="text-blue-500 focus:ring-blue-500"
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="volunteer"
                                value="no"
                                checked={volunteer === 'no'}
                                onChange={(e) => setVolunteer(e.target.value)}
                                className="text-blue-500 focus:ring-blue-500"
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;
