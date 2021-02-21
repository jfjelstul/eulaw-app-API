
const controller = require.main.require("./EUSA-module/controllers/EUSA-controller.js");

module.exports = app => {
  app.get("/EUSA-database/cases", controller.cases);
  app.get("/EUSA-database/cases/TS", controller.cases_TS);
  app.get("/EUSA-database/cases/CSTS/MS", controller.cases_CSTS_MS);
  app.get("/EUSA-database/cases/CSTS/DG", controller.cases_CSTS_DG);
  app.get("/EUSA-database/cases/DDY", controller.cases_DDY);
  app.get("/EUSA-database/decisions", controller.decisions);
  app.get("/EUSA-database/decisions/TS", controller.decisions_TS);
  app.get("/EUSA-database/decisions/CSTS/MS", controller.decisions_CSTS_MS);
  app.get("/EUSA-database/decisions/CSTS/DG", controller.decisions_CSTS_DG);
  app.get("/EUSA-database/decisions/DDY", controller.decisions_DDY);
  app.get("/EUSA-database/awards", controller.awards);
  app.get("/EUSA-database/awards/CSTS", controller.awards_CSTS);
};
