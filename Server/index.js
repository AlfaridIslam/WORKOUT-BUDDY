require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// port
const PORT = process.env.PORT || 4000;

// db connection
require("./db/connection");

// Require ROUTES
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());

app.use(cors());

// app.get("/", (req, res) => {
//   try {
//     res.send("hello workbuddy..!!");
//   } catch (err) {
//     console.log(err);
//   }
// });

// Routes

app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at PORT:${PORT}`);
});
