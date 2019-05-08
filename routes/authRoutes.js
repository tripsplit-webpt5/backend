const express = require("express");
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const db = require('./dbconfig')
const secret = process.env.SECRET
const router = express.Router()

//create a token for a user
//tokens are valid for 1 hour
function generateToken(user) {
    const payload = {
        username: user.username
    };
    const options = {
        expiresIn: '1h',
        jwtid: '12345',
    }
    return jwt.sign(payload, secret, options)
  }

//hashes the user's password and saves in the database
//returns the user id and a token
router.post("/register", (req, res) => {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 3);
  creds.password = hash;
  db("users")
    .insert(creds)
    .then(ids => {
      const id = ids[0];

      db('users').where({id}).first().then(user => {
          const token = generateToken(user);
          res.status(201).json({id: user.id, token});
      }).catch(err => res.status(500).send(err))
      
    })
    .catch(err => res.status(500).send(err));
});

//looks for username in the database 
//if found hashes password and checks against password in database
//returns user id and a token
router.post("/login", (req, res) => {
    const creds = req.body;
  db("users")
    .where("username", creds.username)
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({id: user.id, token});
      } else {
        res.status(401).json({ message: "incorrect password" });
      }
    })
    .catch(err => res.status(500).json({error: err}));
});

module.exports = router;