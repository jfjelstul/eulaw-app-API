const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");

// load a new instance
const app = express();

// versions
const v1 = express.Router();
const v2 = express.Router();

// cors
app.use(cors());

// json parser
app.use(bodyParser.json());

// rate limit
app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 12,
});
app.use(limiter);

// version 1
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

// version 2 (not implemented)
v2.get("/", (req, res) => {
  res.json({ message: "Welcome to v2.0 of the eulaw.app API! This verson has not been implemented yet." })
});

// end points
require.main.require("./EUIP-module/routes/EUIP-routes.js")(v1);
require.main.require("./EUSA-module/routes/EUSA-routes.js")(v1);
require.main.require("./EUTR-module/routes/EUTR-routes.js")(v1);
require.main.require("./authentication/authentication-routes.js")(v1);

// routes to each version
app.use("/v1", v1);
app.use("/v2", v2);
app.use("/", v1);

// port
app.listen(4000, function() {
  console.log("HTTPS server is running on port 4000")
})
