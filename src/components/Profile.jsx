import React, { useState } from 'react';

const Profile = () => {
  const [bmi, setBmi] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8">Profile</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Info */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Basic Info</h3>
            <input
              type="text"
              placeholder="Your name"
              className="outline-none w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="outline-none w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Your password"
              className="outline-none w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* BMI Calculator */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">BMI</h3>
            <input
              type="number"
              placeholder="Enter Height (in cms)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="number"
              placeholder="Enter Weight (in kgs)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button
              onClick={calculateBMI}
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
            >
              Calculate BMI
            </button>
            {bmi && (
              <p className="mt-4 text-lg text-center text-purple-700">Your BMI is: {bmi}</p>
            )}
          </div>

          {/* Extra Info */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Extra Info</h3>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Activity Level</h4>
              <label className="block mb-2">
                <input type="radio" name="activity" className="mr-2" /> Little to No
              </label>
              <label className="block mb-2">
                <input type ="radio" name="activity" className="mr-2" /> Little Active
              </label>
              <label className="block mb-2">
                <input type ="radio" name="activity" className="mr-2" /> Moderately Active
              </label>
              <label className="block mb-2">
                <input type ="radio" name="activity" className="mr-2" /> Advanced
              </label>
            </div>
            <div>
              <h4  className="text-sm font-semibold mb-2">Type of Exercise</h4>
              <label className="block mb-2">
                <input type="checkbox" className="mr-2" /> Swimming
              </label>
              <label className="block mb-2">
                <input type ="checkbox" className="mr-2" /> Running
              </label>
              <label className="block mb-2">
                <input type ="checkbox" className="mr-2" /> Gym
              </label>
              <label className="block mb-2">
                <input type ="checkbox" className="mr-2" /> Cycling
              </label>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {/* Your Journey */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Your Journey</h3>
            <textarea
              placeholder="Give a detailed process of your journey"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button className="w-full mt-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500">
              Share with others
            </button>
          </div>

          {/* Your Progress */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
              {/* Placeholder for a progress chart */}
              <p className="text-2xl font-bold text-gray-600">75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
