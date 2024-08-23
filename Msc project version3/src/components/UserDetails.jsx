// UserDetails.js
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import an icon for closing the modal

const UserDetails = ({ user, onClose }) => {
  let url = "http://localhost:3000"; // Update the URL as needed
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={user?.journey?.beforeImage ? `${url}${user.journey.beforeImage}` : "https://via.placeholder.com/300"}
              alt="Before"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img
              src={user?.journey?.afterImage ? `${url}${user.journey.beforeImage}` : "https://via.placeholder.com/300"}
              alt="After"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-600 mt-2">{user.journey?.description || "No description available"}</p>
        {/* Add more details and styling as needed */}
      </div>
    </div>
  );
};

export default UserDetails;
