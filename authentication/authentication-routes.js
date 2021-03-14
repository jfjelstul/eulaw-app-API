const jwt = require("jsonwebtoken");
const withAuth = require.main.require("./utilities/middleware")
const secret = require.main.require("./config/secret.js");
const users = require.main.require("./config/users.js");

module.exports = app => {

  // route to log in
  app.post("/login", (req, res) => {

    // read the username and password from the request
    const { username, password } = req.body;

    // filter out the user from the list of users by username and password
    const user = users.users.find(u => {
      return u.username === username && u.password === password
    });

    // if the user is registered
    if (user) {

      // generate an access token
      const token = jwt.sign({
        username: user.username
      }, secret.secret, { expiresIn: "1h" });

      res.json({
        token
      });

    } else {
      res.send("The username or password you entered is incorrect. Please try again.")
    }
  });

  // route to authenticate user
  app.post("/authentication", withAuth, function (req, res) {
    res.status(200).send(req.username);
  });
};
