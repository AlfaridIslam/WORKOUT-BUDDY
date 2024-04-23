const express = require("express");
const authUser = require("../middleware/userMiddleware");

// Require controllers
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// for secure routing 
router.use(authUser);

// get entire data

router.get("/", getWorkouts);

// get single data

router.get("/:id", getWorkout);

// create record

router.post("/", createWorkout);

// UPDATE record

router.patch("/:id", editWorkout);

// DELETE record

router.delete("/:id", deleteWorkout);

module.exports = router;
