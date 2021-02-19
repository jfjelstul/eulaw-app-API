const express = require("express"); // import express
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const v1 = express.Router();
const v2 = express.Router();

// load a new instance of express
// creates an object that denotes the express application
// the object has methods for roouting HTTP requests
const app = express();

// use cors
app.use(cors());

// rate limit
app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
});
app.use(limiter);

// root end point
// the "get" method has two parameters: path and callback
// path is the string of the URL path
// callback is a function passed as a parameter
// the callback function has two paremeters: req and res
// parameters are a request (req) and a reponse (res)
// req is an object with the HTTP request (query string, parameterse, body, HTTP headers, etc.)
// res is an object with the HTTP response
v1.get("/", (req, res) => {
  res.json({ message: "Welcome to v1.0 of the eulaw.app API!" })
});
v1.get("/EUIP-database", (req, res) => {
  res.json({ message: "Welcome to the EUIP Database module of the eulaw.app API!" })
});
v1.get("/EUTR-database", (req, res) => {
  res.json({ message: "Welcome to the EUTR Database module of the eulaw.app API!" })
});
v1.get("/EUSA-database", (req, res) => {
  res.json({ message: "Welcome to the EUSA Database module of the eulaw.app API!" })
});

v2.get("/", (req, res) => {
  res.json({ message: "Welcome to v2.0 of the eulaw.app API! This verson has not been implemented yet." })
});

// end points for member state years model
// pass in "app" as an input
require.main.require("./EUIP-module/routes/EUIP-routes.js")(v1);
require.main.require("./EUSA-module/routes/EUSA-routes.js")(v1);
require.main.require("./EUTR-module/routes/EUTR-routes.js")(v1);

// routes to each version
app.use("/v1", v1);
app.use("/v2", v2);
app.use("/", v1);

app.listen(4000, function() {
  console.log("HTTPS server is running on port 4000")
})
