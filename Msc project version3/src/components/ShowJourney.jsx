import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ShowJourney = ({ journey, onClose }) => {
  let url = "http://localhost:3000";

  if (!journey) return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <AiOutlineClose size={24} />
        </button>
        <p className="text-center text-2xl">No journey details available</p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">Journey Details</h2>

        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-1/2 p-2">
            <img
              src={journey.beforeImage ? `${url}${journey.beforeImage}` : "https://via.placeholder.com/300"}
              alt="Before"
              className="w-full h-auto rounded-lg border border-gray-300"
            />
            <p className="text-center mt-2 font-semibold">Before</p>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <img
              src={journey.afterImage ? `${url}${journey.afterImage}` : "https://via.placeholder.com/300"}
              alt="After"
              className="w-full h-auto rounded-lg border border-gray-300"
            />
            <p className="text-center mt-2 font-semibold">After</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
          <table className="min-w-full bg-white">
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 font-bold text-gray-700">Description:</td>
                <td className="py-2 px-4 text-gray-600">{journey.description || "No description available"}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-bold text-gray-700">Target BMI:</td>
                <td className="py-2 px-4 text-gray-600">{journey.targetBmi || "N/A"}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-bold text-gray-700">Target Time:</td>
                <td className="py-2 px-4 text-gray-600">{journey.targetTime || "N/A"}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-bold text-gray-700">Preferred Exercise:</td>
                <td className="py-2 px-4 text-gray-600">{journey.preferredExercise || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowJourney;
