// src/components/NotFound.js

import React from 'react';

const NotFound = () => {
  return (
    <div className="flex  justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?w=740&t=st=1706640715~exp=1706641315~hmac=729074251f6fecc4ffd4ed9c861d89a0de1060460e6398fc19e04006d330aa61" // Replace with the actual path to your image
          alt="404 Not Found"
          className="mx-auto mb-4 w-[400px] aspect-square mix-blend-multiply"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404 Not Found</h1>
        <p className="text-gray-600">Sorry, the page you are looking for might not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
