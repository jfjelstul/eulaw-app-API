
const controller = require.main.require("./EUTR-module/controllers/EUTR-controller.js");

module.exports = app => {
  app.get("/EUTR-database/notifications", controller.notifications);
  app.get("/EUTR-database/notifications/TS", controller.notificationsTS);
  app.get("/EUTR-database/notifications/CSTS", controller.notificationsCSTS);
  app.get("/EUTR-database/comments", controller.comments);
  app.get("/EUTR-database/comments/TS", controller.commentsTS);
  app.get("/EUTR-database/comments/CSTS", controller.commentsCSTS);
  app.get("/EUTR-database/comments/DDY", controller.commentsDDY);
  app.get("/EUTR-database/opinions", controller.opinions);
  app.get("/EUTR-database/opinions/TS", controller.opinionsTS);
  app.get("/EUTR-database/opinions/CSTS", controller.opinionsCSTS);
  app.get("/EUTR-database/opinions/DDY", controller.opinionsDDY);
  app.get("/EUTR-database/entity-codes", controller.entityCodes);
};
