import React from 'react';
import Hero from './Hero';
import Card from '../components/Card';
import CreaterCard from '../components/CreaterCard';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Explore Resources</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <Card title="Past Calamity" logo={<i className="fa-solid fa-house text-3xl"></i>} link="/disaster" />
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <Card title="Natural Disasters" logo={<i className="fa-solid fa-volcano text-3xl"></i>} />
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <Card title="Safety Measures" logo={<i className="fa-solid fa-tornado text-3xl"></i>} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">About The Creators</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <CreaterCard name="Narendra" image="" role="MERN Stack Developer" url="" />
          <CreaterCard name="Sachin" image="" role="MERN Stack Developer" url="" />
          <CreaterCard name="Sajid" image="" role="Database & Backend Developer" url="" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Saviour. All rights reserved.
          </p>
          <p className="text-sm">
            <a href="/privacy" className="hover:underline">Privacy Policy</a> |
            <a href="/terms" className="hover:underline"> Terms of Service</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
