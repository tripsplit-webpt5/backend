const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

function protected(req, res, next) {
  const token = req.headers.authorization;
  if(token) {
      jwt.verify(token, secret, (err, decodedToken) => {
          if(err) {
              res.status(401).json({message: "incorrect username or password"})
          } else {
              next();
          }
      })
  } else {
      res.status(401).json({message: "unauthorized"})
  }
}

module.exports = protected