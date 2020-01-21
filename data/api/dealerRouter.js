const express = require("express");

const router = express.Router();

const db = require("../dbConfig");

// GET return all cars
router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      if (cars.length) {
        res.json(cars);
      } else {
        res.status(404).json({ error_message: "Unable to find any cars" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error_message: "Something happened when finding cars" });
    });
});

// GET specific car

// POST add a new car
router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error_message: "Something happened when adding a car" });
    });
});

// PUT update a car

// DELETE remove a car

module.exports = router;
