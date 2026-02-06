import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white flex items-center justify-center p-6">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center border border-sky-100">
        
        <h1 className="text-3xl font-bold text-sky-600 mb-4">
          📝 TODO APP
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Welcome back,
        </p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
          <h2 className="text-xl font-semibold text-sky-700">
            Shahbaz 👋
          </h2>
        </div>

      </div>

    </div>
  );
};

export default Page;
