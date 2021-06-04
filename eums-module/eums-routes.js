const controller = require.main.require("./eums-module/eums-controller.js");

module.exports = app => {

  app.get("/databases/EUMS", controller.datasets);

  app.get("/databases/EUMS/member-states", controller.member_states);
  app.get("/databases/EUMS/member-states/CSTS", controller.member_states_csts);
  app.get("/databases/EUMS/member-states/DDY", controller.member_states_ddy);
  app.get("/databases/EUMS/QMV-weights", controller.qmv_weights);

  app.get("/databases/EUMS/variables", controller.variables);
  app.get("/databases/EUMS/datasets", controller.datasets);

  app.get("/ID-numbers/EUMS/member-state", controller.member_state_id)
};
