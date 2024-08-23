import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext'; // Adjust the import path as needed
import UserDetails from './UserDetails'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [targetBMI, setTargetBMI] = useState('');
  const [preferredExercise, setPreferredExercise] = useState('');
  const navigate = useNavigate();
  let url = "http://localhost:3000";
  // Function to handle user click
  const handleUserClick = (userId) => {
    const user = users.find(user => user._id === userId);
    setSelectedUser(user);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedUser(null);
  };

  // Filter users based on search input
  const filteredUsers = users.filter(user => {
    const userBMI = user.journey?.bmi || 0; // Assume user's BMI is stored in user.journey.bmi
    const targetBMIValue = parseFloat(targetBMI);
    const minBMI = targetBMIValue - 5;
    const maxBMI = targetBMIValue + 5;

    return (
      (user.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        user.journey?.description?.toLowerCase().includes(searchTerm?.toLowerCase())) &&
      (isNaN(targetBMIValue) || (userBMI >= minBMI && userBMI <= maxBMI)) &&
      (preferredExercise === '' || user.journey?.exercise?.toLowerCase().includes(preferredExercise?.toLowerCase()))
    );
  });
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none p-3 border rounded-lg shadow-md w-full max-w-xs focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="number"
            placeholder="Enter Your Target BMI"
            value={targetBMI}
            onChange={(e) => setTargetBMI(e.target.value)}
            className="outline-none p-3 border rounded-lg shadow-md w-full max-w-xs focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Preferred Exercise"
            value={preferredExercise}
            onChange={(e) => setPreferredExercise(e.target.value)}
            className="outline-none p-3 border rounded-lg shadow-md w-full max-w-xs focus:ring-2 focus:ring-purple-500"
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
          {filteredUsers?.map((user) => (
            <div
              key={user._id}
              className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 cursor-pointer"
              onClick={() => handleUserClick(user._id)}
            >
              <div className="flex justify-between mb-4">
                <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">
                  <img src={user?.journey?.beforeImage ? `${url}${user.journey.beforeImage}` : "https://via.placeholder.com/300"} alt="Before" className="h-full w-full object-cover rounded-lg" />
                </div>
                <div className="bg-gray-300 w-32 h-32 flex items-center justify-center rounded-lg">
                  <img src={user?.journey?.afterImage ? `${url}${user.journey.beforeImage}` : "https://via.placeholder.com/300"} alt="After" className="object-top h-full w-full object-cover rounded-lg" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">{user?.name || "No description available"}</p>
              <button className="px-10 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">
                See Details
              </button>
            </div>
          ))}
        </div>

        {/* Render UserModal if a user is selected */}
        {selectedUser && (
          <UserDetails user={selectedUser} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Home;
