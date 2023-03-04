const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    workoutType: {
        type: String,
        required: [true, 'workoutType is required']
    },
    duration: {
        type: String ,
        required: [true, 'duration is required']
    },
    date: {
        type: Date,
        required: [true, 'date is required']
    },
},
 { timestamps: true }
);

const workoutModel = mongoose.model('workouts', workoutSchema);
module.exports = workoutModel;
