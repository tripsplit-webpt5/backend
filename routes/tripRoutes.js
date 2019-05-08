const express = require('express');
const db = require('./dbconfig')
const router = express.Router()
const protected = require('./protected')

router.get("/trips/all/:userid", protected, (req, res) => {
  db("trips")
    .select()
    .where({user_id: req.params.userid})
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.send(err));
});

router.get("/trips/:tripid", protected, (req, res) => {
  db("trips")
    .select()
    .where({id: req.params.tripid})
    .first()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.send(err));
});

router.post("/trips", protected, (req, res) => {
  db("trips")
    .insert(req.body)
    .returning("id")
    .then(tripid => {
      res.status(200).json(tripid[0]);
    })
    .catch(err => res.send(err));
});

router.put("/trips/:tripid", protected, (req, res) => {
  db("trips")
    .update(req.body)
    .where({id: req.params.tripid})
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.send(err));
});

router.delete("/trips/:tripid", protected, (req, res) => {
  db("trips")
    .where({id: req.params.tripid})
    .del()
    .then(response => {
      if (response){
        res.status(200).json({message: "Trip successfully deleted"});
      } else {
      res.status(400).json({message: "No trip with the given ID"});
      }
    })
    .catch(err => res.send(err));
});

module.exports = router 