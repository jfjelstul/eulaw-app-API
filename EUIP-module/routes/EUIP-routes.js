const controller = require.main.require("./EUIP-module/controllers/EUIP-controller.js");

module.exports = app => {
  app.get("/EUIP-database/cases", controller.cases);
  app.get("/EUIP-database/cases/TS", controller.casesTS);
  app.get("/EUIP-database/cases/CSTS/:crossSection", controller.casesCSTS);
  app.get("/EUIP-database/cases/DDY", controller.casesDDY);
  app.get("/EUIP-database/decisions", controller.decisions);
  app.get("/EUIP-database/decisions/TS", controller.decisionsTS);
  app.get("/EUIP-database/decisions/CSTS/:crossSection", controller.decisionsCSTS);
  app.get("/EUIP-database/decisions/DDY", controller.decisionsDDY);
};
