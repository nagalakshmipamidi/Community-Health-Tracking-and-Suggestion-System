import React from 'react';
import SignupImage from "../assets/Login.avif"
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl w-full mt-20 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-[38vw] bg-gray-200 flex items-center justify-center ">
        <img className='h-full w-full object-cover' src={SignupImage} alt={<span className="text-gray-500">Image</span>} />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Sign Up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your first name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="text"
              placeholder="Your last name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="password"
              placeholder="Pick a password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500">
              Sign Up
            </button>
          </form>

          <div className="flex items-center justify-center space-x-4 mt-6">
            <button className="flex items-center space-x-2 py-2 px-4 border rounded-lg text-gray-700 hover:bg-gray-100">
              <span className="text-lg">G</span>
              <span>Sign Up with Google</span>
            </button>
            <button className="flex items-center space-x-2 py-2 px-4 border rounded-lg text-gray-700 hover:bg-gray-100">
              <span className="text-lg">f</span>
              <span>Sign Up with Facebook</span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-700 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
