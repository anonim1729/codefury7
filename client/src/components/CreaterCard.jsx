import React from 'react';

const CreaterCard = ({image,url,name,role}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex justify-end px-4 pt-4">
        <button 
          id="dropdownButton" 
          className="inline-block text-blue-500 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-200 rounded-lg text-sm p-1.5" 
          type="button"
        >
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-blue-500 hover:bg-blue-100">Edit</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-blue-500 hover:bg-blue-100">Export Data</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-blue-100">Delete</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Profile" />
        <h5 className="mb-1 text-xl font-medium text-blue-600">{name}</h5>
        <span className="text-sm text-blue-400">{role}</span>
        <div className="flex mt-4 md:mt-6">
          <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">Connect+</a>
          <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-blue-500 focus:outline-none bg-white rounded-lg border border-blue-200 hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-blue-200">Message</a>
        </div>
      </div>
    </div>
  );
}

export default CreaterCard;
