const controller = require.main.require("./EUIP-module/controllers/EUIP-controller.js");

module.exports = app => {
  app.get("/EUIP-database/cases", controller.cases);
  app.get("/EUIP-database/cases/TS", controller.cases_TS);
  app.get("/EUIP-database/cases/CSTS/MS", controller.cases_CSTS_MS);
  app.get("/EUIP-database/cases/CSTS/DG", controller.cases_CSTS_DG);
  app.get("/EUIP-database/cases/DDY", controller.cases_DDY);
  app.get("/EUIP-database/decisions", controller.decisions);
  app.get("/EUIP-database/decisions/TS", controller.decisions_TS);
  app.get("/EUIP-database/decisions/CSTS/MS", controller.decisions_CSTS_MS);
  app.get("/EUIP-database/decisions/CSTS/DG", controller.decisions_CSTS_DG);
  app.get("/EUIP-database/decisions/DDY", controller.decisions_DDY);
  app.get("/EUIP-database/codebook", controller.codebook);
  app.get("/EUIP-database/codebook/API", controller.codebook_API);
};
