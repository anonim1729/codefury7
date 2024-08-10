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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Past calamity" logo={<i className="fa-solid fa-house text-2xl"></i>} link={"/disaster"}/>
            <Card title="Card 2" logo={<i className="fa-solid fa-volcano text-2xl"></i>} />
            <Card title="Card 3" logo={<i className="fa-solid fa-tornado text-2xl"></i>} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
  <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">About The Creators</h2>
  <div className="flex flex-wrap justify-center space-x-4">
    <CreaterCard name="Narendra" image="" role="MERN stack Developer" url=""/>
    <CreaterCard name="Sachin" image="" role="MERN stack Developer" url=""/>
    <CreaterCard name="Sajid" image="" role="Database & Backend Developer" url=""/>
  </div>
</div>

    </>
  );
};

export default Home;
