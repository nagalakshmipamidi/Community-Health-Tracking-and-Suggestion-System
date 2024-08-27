import React, { useState, useEffect } from "react";
import { GetUserData, UpdateProfile } from "../api";
import AddJourney from "./AddJourney";
import ShowJourney from "./ShowJourney";

const Profile = () => {
  const [bmi, setBmi] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [exercises, setExercises] = useState([]);
  const [journeyDescription, setJourneyDescription] = useState("");
  const [progress, setProgress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showJourney, setshowJourney] = useState(false)
  const [journey, setJourney] = useState(null);
  const [isJourney, setisJourney] = useState(true);

  // Function to calculate BMI
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  // Fetch user data from localStorage and set states when component mounts
  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId) {
      getData(userId).then((response) => {
        if (response && response.status === 200) {
          localStorage.setItem("userData", JSON.stringify(response.data));
          FillData();
        } else {
          alert("Failed to fetch user data");
        }
      });
    }
  }, []);

  const updateDetails = async () => {
    const userData = {
      name,
      email,
      password,
      height,
      weight,
      bmi,
      activityLevel,
      exercises,
      journey: {
        description: journeyDescription,
        progress: progress,
      },
    };
    const userId = localStorage.getItem("user");
    const response = await UpdateProfile({ userId, ...userData });

    if (response && response.status === 200) {
      localStorage.setItem("userData", JSON.stringify(response.data));
      FillData();
      alert("Profile updated successfully");
    } else {
      alert("Profile update failed");
    }
  };

  const FillData = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      setName(userData.name || "");
      setEmail(userData.email || "");
      setPassword(userData.password || "");
      setHeight(userData.height || "");
      setWeight(userData.weight || "");
      setBmi(userData.bmi || "");
      setActivityLevel(userData.activityLevel || "");
      setExercises(userData.exercises || []);
      setJourneyDescription(userData.journey?.description || "");
      setProgress(userData.journey?.progress || "");
      setJourney(userData.journey || null);
      setisJourney(userData.journey?.description ? false : true);
    }
  };

  const getData = async (userId) => {
    const response = await GetUserData(userId);
    return response;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
            Profile
          </h2>
          <h2
            className={`cursor-pointer text-lg text-center text-white px-3 py-2 rounded-md bg-purple-700 mb-8 ${isJourney ? '' : 'hidden'}`}
            onClick={() => setShowModal(true)}
          >
            ADD JOURNEY
          </h2>
          <h2
            className={`cursor-pointer text-lg text-center text-white px-3 py-2 rounded-md bg-purple-700 mb-8 ${isJourney ? 'hidden' : ''}`}
            onClick={() => setshowJourney(true)}
          >
            SHOW JOURNEY
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Info */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Basic Info</h3>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              disabled
              className="outline-none w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="hidden outline-none w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
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
              <p className="mt-4 text-lg text-center text-purple-700">
                Your BMI is: {bmi}
              </p>
            )}
          </div>

          {/* Extra Info */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Extra Info</h3>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Activity Level</h4>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="activity"
                  value="Little to No"
                  checked={activityLevel === "Little to No"}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="mr-2"
                />{" "}
                Little to No
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="activity"
                  value="Little Active"
                  checked={activityLevel === "Little Active"}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="mr-2"
                />{" "}
                Little Active
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="activity"
                  value="Moderately Active"
                  checked={activityLevel === "Moderately Active"}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="mr-2"
                />{" "}
                Moderately Active
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="activity"
                  value="Advanced"
                  checked={activityLevel === "Advanced"}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="mr-2"
                />{" "}
                Advanced
              </label>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Type of Exercise</h4>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  value="Swimming"
                  checked={exercises.includes("Swimming")}
                  onChange={(e) => handleExerciseChange(e, "Swimming")}
                  className="mr-2"
                />{" "}
                Swimming
              </label>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  value="Running"
                  checked={exercises.includes("Running")}
                  onChange={(e) => handleExerciseChange(e, "Running")}
                  className="mr-2"
                />{" "}
                Running
              </label>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  value="Gym"
                  checked={exercises.includes("Gym")}
                  onChange={(e) => handleExerciseChange(e, "Gym")}
                  className="mr-2"
                />{" "}
                Gym
              </label>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  value="Cycling"
                  checked={exercises.includes("Cycling")}
                  onChange={(e) => handleExerciseChange(e, "Cycling")}
                  className="mr-2"
                />{" "}
                Cycling
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
              value={journeyDescription}
              onChange={(e) => setJourneyDescription(e.target.value)}
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
              <p className="text-2xl font-bold text-gray-600">
                {(progress ? progress : 0) + "%" || "75%"}
              </p>
            </div>
            <input
              placeholder="Enter your progress"
              value={progress}
              className=" mt-4 px-3 py-3 outline-none text-black rounded-lg  focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setProgress(e.target.value)}
            ></input>
          </div>
        </div>
        <button
          onClick={updateDetails}
          className="w-full mt-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
        >
          UPDATE PROFILE DETAILS
        </button>
      </div>
      {showModal && <AddJourney showModal={showModal} setShowModal={setShowModal} />}
      {showJourney && <ShowJourney journey={journey} onClose={()=>setshowJourney(false)}  />}
    </div>
  );

  // Handle exercise change
  function handleExerciseChange(e, exercise) {
    if (e.target.checked) {
      setExercises([...exercises, exercise]);
    } else {
      setExercises(exercises.filter((ex) => ex !== exercise));
    }
  }
};

export default Profile;
