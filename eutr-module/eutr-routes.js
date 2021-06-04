const controller = require.main.require("./eutr-module/eutr-controller.js");

module.exports = app => {

  app.get("/databases/EUTR", controller.datasets);

  app.get("/databases/EUTR/notifications", controller.notifications);
  app.get("/databases/EUTR/notifications/TS", controller.notifications_ts);
  app.get("/databases/EUTR/notifications/CSTS", controller.notifications_csts);

  app.get("/databases/EUTR/comments", controller.comments);
  app.get("/databases/EUTR/comments/TS", controller.comments_ts);
  app.get("/databases/EUTR/comments/CSTS/notifier", controller.comments_csts_n);
  app.get("/databases/EUTR/comments/CSTS/submitter", controller.comments_csts_s);
  app.get("/databases/EUTR/comments/DDY", controller.comments_ddy);
  app.get("/databases/EUTR/comments/network", controller.comments_net);

  app.get("/databases/EUTR/opinions", controller.opinions);
  app.get("/databases/EUTR/opinions/TS", controller.opinions_ts);
  app.get("/databases/EUTR/opinions/CSTS/notifier", controller.opinions_csts_n);
  app.get("/databases/EUTR/opinions/CSTS/submitter", controller.opinions_csts_s);
  app.get("/databases/EUTR/opinions/DDY", controller.opinions_ddy);
  app.get("/databases/EUTR/opinions/network", controller.opinions_net);

  app.get("/databases/EUTR/variables", controller.variables);
  app.get("/databases/EUTR/datasets", controller.datasets);

  app.get("/ID-numbers/EUTR/notification-by", controller.notification_by_id);
  app.get("/ID-numbers/EUTR/comment-by", controller.comment_by_id);
  app.get("/ID-numbers/EUTR/opinion-by", controller.opinion_by_id);
};
