const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter the type of workout."
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the workout." 
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
})

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;





//exercises: Array

//use reduce to get totals
