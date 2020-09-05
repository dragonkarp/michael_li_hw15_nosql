const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter your workout name."
    },
    type: {
        type: String,
        trim: true,
        required: "Enter the type of the workout."
    },
    weight: {
        type: Number,
        default: 0
    },
    sets: {
        type: Number,
        default: 0
    },
    reps: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        default: 0
    },
    cardio: {
        type: Boolean,
        required: "Is this a cardio workout?"
    },
    cardioDistance: {
        type: Number,
        default: 0
    }
})

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;