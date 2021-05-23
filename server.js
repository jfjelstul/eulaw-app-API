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
const dataLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 6 * 2,
});
app.use("/databases/", dataLimiter);
const valuesLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
});
app.use("/values/", valuesLimiter);

// version 1 welcome messages
v1.get("/", (req, res) => {
  res.json({ message: "Welcome to v1.0 of the eulaw.app API!" })
});
v1.get("/databases/EvoEU", (req, res) => {
  res.json({ message: "Welcome to the Evolution of European Union Law (EvoEU) Database module of the eulaw.app API!" })
});
v1.get("/databases/ECIO", (req, res) => {
  res.json({ message: "Welcome to the European Commission Internal Organization (ECIO) Database module of the eulaw.app API!" })
});
v1.get("/databases/EUIP", (req, res) => {
  res.json({ message: "Welcome to the European Union Infringement Procedure (EUIP) Database module of the eulaw.app API!" })
});
v1.get("/databases/EUSA", (req, res) => {
  res.json({ message: "Welcome to the European Union State Aid (EUSA) Database module of the eulaw.app API!" })
});
v1.get("/databases/EUTR", (req, res) => {
  res.json({ message: "Welcome to the European Union Technical Regulations (EUTR) Database module of the eulaw.app API!" })
});
v1.get("/databases/EUMS", (req, res) => {
  res.json({ message: "Welcome to the European Union Member States (EUMS) Database module of the eulaw.app API!" })
});

// version 2 welcome message
v2.get("/", (req, res) => {
  res.json({ message: "Welcome to v2.0 of the eulaw.app API! This verson has not been implemented yet." })
});

// end points
require.main.require("./evoeu-module/evoeu-routes.js")(v1);
require.main.require("./ecio-module/ecio-routes.js")(v1);
require.main.require("./euip-module/euip-routes.js")(v1);
require.main.require("./eusa-module/eusa-routes.js")(v1);
require.main.require("./eutr-module/eutr-routes.js")(v1);
require.main.require("./eums-module/eums-routes.js")(v1);
require.main.require("./authentication/authentication-routes.js")(v1);

// routes to each version
app.use("/v1", v1);
app.use("/v2", v2);
app.use("/", v1);

// port
app.listen(4000, function() {
  console.log("HTTPS server is running on port 4000")
})
