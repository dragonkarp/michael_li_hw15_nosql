const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find().then(result => {
        res.json(result)
    })
})

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.update({_id: req.params.id}, {$push: {exercises: req.body}})
        .then(result => {
            res.json(result)
        })
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(results => {
            res.json(results)
        })
        .catch()
})

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7).then(result => {
        res.json(result)
    })
})

module.exports = router;