
const controller = require.main.require("./EUTR-module/controllers/EUTR-controller.js");

module.exports = app => {
  app.get("/EUTR-database/notifications", controller.notifications);
  app.get("/EUTR-database/notifications/TS", controller.notifications_TS);
  app.get("/EUTR-database/notifications/CSTS", controller.notifications_CSTS);
  app.get("/EUTR-database/comments", controller.comments);
  app.get("/EUTR-database/comments/TS", controller.comments_TS);
  app.get("/EUTR-database/comments/CSTS", controller.comments_CSTS);
  app.get("/EUTR-database/comments/DDY", controller.comments_DDY);
  app.get("/EUTR-database/opinions", controller.opinions);
  app.get("/EUTR-database/opinions/TS", controller.opinions_TS);
  app.get("/EUTR-database/opinions/CSTS", controller.opinions_CSTS);
  app.get("/EUTR-database/opinions/DDY", controller.opinions_DDY);
  app.get("/EUTR-database/entity-codes", controller.entity_codes);
};
