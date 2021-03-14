const jwt = require("jsonwebtoken");
const secret = require.main.require("./config/secret.js");

const withAuth = function (req, res, next) {
  const token = req.body.token;

  if(!token) {
    res.status(401).send("Unauthorized: no token provided");
  } else {
    jwt.verify(token, secret.secret, function (err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: invalid token");
      } else {
        req.username = decoded.username;
        next();
      }
    })
  }
};

module.exports = withAuth;
