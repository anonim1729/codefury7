import React from 'react';
import img404 from "../assets/PageNotFound.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-4">
      <img src={img404} alt="404 Not Found" className="w-1/2 max-w-md mb-8" />
      <h1 className="text-5xl font-bold text-blue-500 mb-4">Page Not Found</h1>
      <p className="text-lg text-blue-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
