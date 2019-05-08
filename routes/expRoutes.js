const express = require('express');
const db = require('./dbconfig')
const router = express.Router()
const protected = require('./protected')

router.get("/expense/all/:tripid", protected, (req, res) => {
  db("expense")
    .select()
    .where({trip_id: req.params.tripid})
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => res.send(err));
});

router.get("/expense/:expenseid", protected, (req, res) => {
  db("expense")
    .select()
    .where({id: req.params.expenseid})
    .first()
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => res.send(err));
});

router.post("/expense", protected, (req, res) => {
  db("expense")
    .insert(req.body)
    .returning("id")
    .then(expenseid => {
      res.status(200).json(expenseid[0]);
    })
    .catch(err => res.send(err));
});

router.put("/expense/:expenseid", protected, (req, res) => {
  db("expense")
    .update(req.body)
    .where({id: req.params.expenseid})
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => res.send(err));
});

router.delete("/expense/:expenseid", protected, (req, res) => {
  db("expense")
    .where({id: req.params.expenseid})
    .del()
    .then(response => {
      if (response){
        res.status(200).json({message: "Expense successfully deleted"});
      } else {
      res.status(400).json({message: "No expense with the given ID"});
      }
    })
    .catch(err => res.send(err));
});

module.exports = router 