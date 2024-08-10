import React from 'react';
import Hero from './Hero';
import Card from '../components/Card'; 

const Home = () => {
  return (
    <>
      <Hero />

      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Past calamity" logo={<i className="fa-solid fa-house text-2xl"></i>} link={"/disaster"}/>
            <Card title="Card 2" logo={<i className="fa-solid fa-volcano text-2xl"></i>} />
            <Card title="Card 3" logo={<i className="fa-solid fa-tornado text-2xl"></i>} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
