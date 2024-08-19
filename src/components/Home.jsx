import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      {/* Navbar */}
     

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto mt-20 p-8 text-center">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6">Inspire Yourself!</h1>
        <p className="text-xl text-gray-600 mb-12">
          We sweat together, we grow together. This journey's yours, but you're not alone.
          Share your goals, find your cheerleaders, celebrate each win. Join our fitness family,
          let's get stronger, healthier, and happier!
        </p>

        {/* Search and Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search your desired journeys"
            className="p-3 border rounded-lg shadow-md w-full max-w-xs focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Your Target BMI"
            className="p-3 border rounded-lg shadow-md w-full max-w-xs focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Time (in hrs)"
            className="p-3 border rounded-lg shadow-md w-full max-w-xs focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Preferred Exercise"
            className="p-3 border rounded-lg shadow-md w-full max-w-xs focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">
            Active
          </button>
          <button className="px-6 py-2 bg-white text-purple-600 border border-purple-600 rounded-full shadow-md hover:bg-purple-50">
            Trending
          </button>
          <button className="px-6 py-2 bg-white text-purple-600 border border-purple-600 rounded-full shadow-md hover:bg-purple-50">
            Popular
          </button>
        </div>

        {/* Journey Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <div className="flex justify-between mb-4">
              <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">Before</div>
              <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">After</div>
            </div>
            <p className="text-gray-600 mb-4">This is a brief description of the journey. Get inspired by the transformation and join the community!</p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">
              Join the Community
            </button>
          </div>

          {/* Duplicate or create similar journey cards as needed */}
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <div className="flex justify-between mb-4">
              <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">Before</div>
              <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">After</div>
            </div>
            <p className="text-gray-600 mb-4">This is another brief description of the journey. Get inspired by the transformation and join the community!</p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">
              Join the Community
            </button>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105">
            <div className="flex justify-between mb-4">
              <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">Before</div>
              <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">After</div>
            </div>
            <p className="text-gray-600 mb-4">This journey card showcases a remarkable transformation. Be part of this change!</p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
