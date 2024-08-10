import React from 'react';
import Hero from './Hero';
import Card from '../components/Card';
import CreaterCard from '../components/CreaterCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />

      {/* cards */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Past calamity" logo={<i className="fa-solid fa-house text-2xl"></i>} link={"/disaster"} />
            <Card title="Card 2" logo={<i className="fa-solid fa-volcano text-2xl"></i>} />
            <Card title="Card 3" logo={<i className="fa-solid fa-tornado text-2xl"></i>} />
          </div>
        </div>
      </div>

      {/* creater cards */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">About The Creators</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <CreaterCard name="Narendra" image="" role="MERN stack Developer" url="https://www.linkedin.com/in/narendra-reddy-c-r-8bb026246/" />
          <CreaterCard name="Sachin" image="https://media.licdn.com/dms/image/D5603AQHgNU7Ax9eIKg/profile-displayphoto-shrink_800_800/0/1713442821809?e=1728518400&v=beta&t=Ac1Hm-c-vLa5217YmT5LKtuoyqgSbrs6CHaU9CWWvmE" role="MERN stack Developer" url="https://www.linkedin.com/in/sachinkashi21/" />
          <CreaterCard name="Sajid" image="https://media.licdn.com/dms/image/v2/D5603AQHU3GKvYy48zQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713298199001?e=1728518400&v=beta&t=WDV2Ww4QSz_tdf7xWrm4LmGaDtDIq20EMYKsfAN7iZw" role="Database & Backend Developer" url="https://www.linkedin.com/in/sajid-husain-patil-b441b5285/" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;