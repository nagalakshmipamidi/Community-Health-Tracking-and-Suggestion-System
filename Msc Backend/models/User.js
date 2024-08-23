const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Basic Info
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  
  // BMI Info
  height: {
    type: String, // Height in cm
  },
  weight: {
    type: String, // Weight in kg
  },
  bmi: {
    type: String, // Calculated BMI
  },
  
  // Extra Info
  activityLevel: {
    type: String, 
    enum: ['Little to No', 'Little Active', 'Moderately Active', 'Advanced'],
  },
  exercises: {
    type: [String], // Array of preferred exercises like ['Swimming', 'Running']
  },
  
  // Journey Info
  journey: {
    description: {
      type: String,
    },
    progress: {
      type: String, // Store progress percentage as a String
      default: 0,
    },
    beforeImage: {
      type: String, // URL to the before image
    },
    afterImage: {
      type: String, // URL to the after image
    },
    description: {
      type: String, // Description of the journey
    },
    targetBmi: {
      type: String,
    },
    targetTime: {
      type: String, // Time in hours
    },
    preferredExercise: { 
      type: String,
    }
  },
  // Additional fields can be added as per further requirements
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
