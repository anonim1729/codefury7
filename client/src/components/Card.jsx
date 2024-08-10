import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, logo, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center text-center max-w-md mx-auto cursor-pointer transition-transform transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="flex items-center justify-center text-blue-500 mr-6">
        <div className="w-20 h-20 flex items-center justify-center">
          {logo}
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
    </div>
  );
};

export default Card;
