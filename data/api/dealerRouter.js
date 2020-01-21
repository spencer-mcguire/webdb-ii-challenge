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
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .then(car => {
      if (car.length) {
        res.json(car[0]);
      } else {
        res.status(404).json({ error_message: `Unable to find car ${id}` });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error_message: `Something happened when finding car ${id}` });
    });
});

// POST add a new car
router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(carId => {
      const id = carId[0];
      console.log(id);
      db("cars")
        .where({ id })
        .then(car => {
          if (car) {
            res.status(201).json(car[0]);
          } else {
            res.status(500).json({
              error_message: "Something happened displaying added car"
            });
          }
        })
        .catch(err => {
          res.status(500).json({ error_message: "OOPS something happened" });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error_message: "Something happened when adding a car" });
    });
});

// PUT update a car
router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db("cars")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count) {
        res.json({ updated: count });
      } else {
        res.status(404).json({ error_message: "invalid car ID" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error_message: "Something happened when adding a car" });
    });
});

// DELETE remove a car
router.delete("/:id", (req, res) => {
  const id = req.params;
  db("cars")
    .where({ id })
    .del()
    .then(count => {
      if (count) {
        res.json({ deleted: count });
      } else {
        res.status(404).json({ error_message: "invalid car ID" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error_message: "Something happened when adding a car" });
    });
});

module.exports = router;
