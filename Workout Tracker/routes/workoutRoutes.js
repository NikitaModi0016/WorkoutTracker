const express = require("express");
const { addWorkout, 
        getAllWorkout,
        editWorkout,
        deleteWorkout,
    } = require("../controllers/workoutController");

//router object
const router = express.Router();

//routes
//add workout POST method
router.post('/add-workout',addWorkout);

//edit workout POST method
router.post('/edit-workout',editWorkout);

//delete workout POST method
router.post('/delete-workout',deleteWorkout);

//get workout POST method
router.post('/get-workout',getAllWorkout);

module.exports = router;