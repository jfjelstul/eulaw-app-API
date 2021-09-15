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
  max: 12 * 2,
});
app.use("/databases/", dataLimiter);
const valuesLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
});
app.use("/ID-numbers/", valuesLimiter);

// version 1 welcome messages
v1.get("/", (req, res) => {
  res.json({ message: "Welcome to v1.0 of the eulaw.app API!" })
});
// v1.get("/databases", (req, res) => {
//   res.json([
//     { database_id: 1, database: "evoeu", label: "EvoEU", name: "Evolution of European Union Law (EvoEU) Database", description: "The Evolution of European Union Law (EvoEU) Database contains network data on the near-universe of legal documents in the acquis communautaire of the European Union (EU), including primary law, secondary law, and case law, and various types of links between documents (1951-2015). The database includes a nodes dataset and a links dataset." },
//     { database_id: 2, database: "ecio", label: "ECIO", name: "European Commission Internal Organization (ECIO) Database", description: "The European Commission Internal Organization (ECIO) Database contains data on each commission of the European Commission, including data on commissioners, departments (Directorates-General and service departments), and commissioner portfolios (1958-2021). The database includes 11 datasets." },
//     { database_id: 3, database: "euip", label: "EUIP", name: "European Union Infringement Procedure (EUIP) Database", description: "The European Union Infringement Procedure (EUIP) Database contains data on the European Commission infringement procedure, including data on infringement cases and decisions in infringement cases (2002-2020). The EUIP Database is part of the European Union Compliance Project (EUCP). The database includes 22 datasets, including time-series, cross-sectional time-series, directed dyad-year, and network data." },
//     { database_id: 4, database: "eusa", label: "EUSA", name: "European Union State Aid (EUSA) Database", description: "The European Union State Aid (EUSA) Database contains data on state aid in the European Union (EU), including data on European Commission state aid cases (2000-2020), decisions in state aid cases (2000-2020), and state aid awards granted by member states (2016-2020). The EUSA Database is part of the European Union Compliance Project (EUCP). The database includes 27 datasets, including time-series, cross-sectional time-series, directed dyad-year, and network data." },
//     { database_id: 5, database: "eutr", label: "EUTR", name: "European Union Technical Regulations (EUTR) Database", description: "The European Union Technical Regulations (EUTR) Database contains data on technical regulations proposed by European Union (EU) member states, including data on notifications of proposed technical regulations and comments and detailed opinions submitted by third-party member states and institutions under the 2015/1535 procedure (1986-2020). The EUTR Database is part of the European Union Compliance Project (EUCP). The database includes 15 datasets, including time-series, cross-sectional time-series, directed dyad-year, and network data." },
//     { database_id: 6, database: "eums", label: "EUMS", name: "European Union Member State (EUMS) Database", description: "The European Union Member State (EUMS) Database contains general data on European Union (EU) member states, including data on accession, domestic political systems, membership in the European Economic and Monetary Union (EMU) and Schengen Area, legal obligations and opt-outs, and membership in other international organizations. The database includes 4 datasets." },
//   ]);
// });

// version 2 welcome message
v2.get("/", (req, res) => {
  res.json({ message: "Welcome to v2.0 of the eulaw.app API! This verson has not been implemented yet." })
});

// end points
require.main.require("./databases-module/databases-routes.js")(v1);
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
