import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-blue-500 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Hello, <span className="font-bold">{user}</span>!
        </p>
        <div className="flex flex-col items-center">
          <p className="text-gray-700 text-md mb-4">
            Fill the form below to help us assist you better:
          </p>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white text-md font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
            <Link to='/form'>fill form</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
