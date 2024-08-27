import React, { useState } from "react";
import { AddYourJourney } from "../api";

const AddJ = ({ showModal, setShowModal }) => {
  const [step, setStep] = useState(1);
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [journeyDesc, setJourneyDesc] = useState("");
  const [targetBmi, setTargetBmi] = useState("");
  const [targetTime, setTargetTime] = useState("");
  const [preferredExercise, setPreferredExercise] = useState("");
  const [progress, setprogress] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1); // Reset to first step
    alert("Journey Added Successfully");
    setShowModal(false);
  };

  const handleAddJourney = async () => {
    const userId = localStorage.getItem("user");
    const formData = new FormData();
    if (beforeImage) formData.append('beforeImage', beforeImage);
    if (afterImage) formData.append('afterImage', afterImage);
    formData.append('description', journeyDesc);
    formData.append('targetBmi', targetBmi);
    formData.append('targetTime', targetTime);
    formData.append('preferredExercise', preferredExercise);
    formData.append('userId', userId);
    formData.append('progress', progress);
    

    try {
      const response = await AddYourJourney(formData);
      console.log(response.data); // Handle success response
      // Optionally, handle success message or redirect here
      handleClose(); // Close modal on successful submission
    } catch (error) {
      console.error(error); // Handle error response
      // Optionally, show error message to the user here
    }// Close modal on successful submission
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
          <h3 className="text-2xl font-bold mb-4">
            {step === 1
              ? "Step 1: Upload Images"
              : step === 2
              ? "Step 2: Journey Details"
              : step === 3
              ? "Step 3: Target Goals"
              : "Review and Submit"}
          </h3>

          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Before Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setBeforeImage(e.target.files[0])}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">After Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAfterImage(e.target.files[0])}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={journeyDesc}
                onChange={(e) => setJourneyDesc(e.target.value)}
                rows="4"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          )}

          {step === 3 && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Target BMI</label>
                <input
                  type="text"
                  value={targetBmi}
                  onChange={(e) => setTargetBmi(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Target Time (hours)</label>
                <input
                  type="text"
                  value={targetTime}
                  onChange={(e) => setTargetTime(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Preferred Exercise</label>
                <input
                  type="text"
                  value={preferredExercise}
                  onChange={(e) => setPreferredExercise(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Progress</label>
                <input
                  type="text"
                  value={progress}
                  onChange={(e) => setprogress(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </>
          )}

          {step === 4 && (
            <div className="mb-4">
              <p className="text-gray-700 mb-2">Review your entries:</p>
              <div className="mb-2">
                <strong>Before Image:</strong> {beforeImage ? beforeImage.name : "None"}
              </div>
              <div className="mb-2">
                <strong>After Image:</strong> {afterImage ? afterImage.name : "None"}
              </div>
              <div className="mb-2">
                <strong>Description:</strong> {journeyDesc}
              </div>
              <div className="mb-2">
                <strong>Target BMI:</strong> {targetBmi}
              </div>
              <div className="mb-2">
                <strong>Target Time (hours):</strong> {targetTime}
              </div>
              <div className="mb-2">
                <strong>Preferred Exercise:</strong> {preferredExercise}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleAddJourney}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                Submit
              </button>
            )}
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddJ;
