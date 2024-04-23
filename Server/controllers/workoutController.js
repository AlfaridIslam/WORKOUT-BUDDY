const Workout = require("../models/workoutModel");

// Get all data

const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  
  try {
    const workoutData = await Workout.find({ user_id }).sort({ createdAt: -1, });

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get single data
const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findById({ _id : id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Post data
const createWorkout = async (req, res) => {
  const {title,reps,load} = req.body;
  
  const user_id = req.user._id;
  // console.group(req)
  try {
    const newWorkout = new Workout({title,reps,load,user_id});

    const workout = await newWorkout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE/EDIT Record
const editWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE Record
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;

    const workoutData = await Workout.findByIdAndDelete({ _id: id });
    res.status(201).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
};
