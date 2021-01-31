const controller = require.main.require("./EUSA-module/controllers/EUSA-controller.js");

module.exports = app => {
  app.get("/EUSA-database/cases", controller.cases);
  app.get("/EUSA-database/cases/TS", controller.casesTS);
  app.get("/EUSA-database/cases/CSTS", controller.casesCSTS);
  app.get("/EUSA-database/cases/DDY", controller.casesDDY);
  app.get("/EUSA-database/decisions", controller.decisions);
  app.get("/EUSA-database/decisions/TS", controller.decisionsTS);
  app.get("/EUSA-database/decisions/CSTS", controller.decisionsCSTS);
  app.get("/EUSA-database/decisions/DDY", controller.decisionsDDY);
  app.get("/EUSA-database/awards", controller.awards);
  app.get("/EUSA-database/awards/CSTS", controller.awardsCSTS);
};
