import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our platform! We are dedicated to providing the best services and 
          resources to help you achieve your goals. Our team is passionate, experienced, 
          and committed to delivering excellence in everything we do.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Whether you're here to learn, connect, or grow, we're here to support you every 
          step of the way. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default About;
