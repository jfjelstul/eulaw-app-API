const controller = require.main.require("./euip-module/euip-controller.js");

module.exports = app => {

  app.get("/databases/EUIP", controller.datasets);

  app.get("/databases/EUIP/cases", controller.cases);
  app.get("/databases/EUIP/cases/TS", controller.cases_ts);
  app.get("/databases/EUIP/cases/TS/case-type", controller.cases_ts_ct);
  app.get("/databases/EUIP/cases/CSTS/member-state", controller.cases_csts_ms);
  app.get("/databases/EUIP/cases/CSTS/member-state/case-type", controller.cases_csts_ms_ct);
  app.get("/databases/EUIP/cases/CSTS/department", controller.cases_csts_dp);
  app.get("/databases/EUIP/cases/CSTS/department/case-type", controller.cases_csts_dp_ct);
  app.get("/databases/EUIP/cases/DDY", controller.cases_ddy);
  app.get("/databases/EUIP/cases/DDY/case-type", controller.cases_ddy_ct);
  app.get("/databases/EUIP/cases/network", controller.cases_net);
  app.get("/databases/EUIP/cases/network/case-type", controller.cases_net_ct);

  app.get("/databases/EUIP/decisions", controller.decisions);
  app.get("/databases/EUIP/decisions/TS", controller.decisions_ts);
  app.get("/databases/EUIP/decisions/TS/case-type", controller.decisions_ts_ct);
  app.get("/databases/EUIP/decisions/CSTS/member-state", controller.decisions_csts_ms);
  app.get("/databases/EUIP/decisions/CSTS/member-state/case-type", controller.decisions_csts_ms_ct);
  app.get("/databases/EUIP/decisions/CSTS/department", controller.decisions_csts_dp);
  app.get("/databases/EUIP/decisions/CSTS/department/case-type", controller.decisions_csts_dp_ct);
  app.get("/databases/EUIP/decisions/DDY", controller.decisions_ddy);
  app.get("/databases/EUIP/decisions/DDY/case-type", controller.decisions_ddy_ct);
  app.get("/databases/EUIP/decisions/network", controller.decisions_net);
  app.get("/databases/EUIP/decisions/network/case-type", controller.decisions_net_ct);

  app.get("/databases/EUIP/variables", controller.variables);
  app.get("/databases/EUIP/datasets", controller.datasets);

  app.get("/ID-numbers/EUIP/member-state", controller.member_state_id);
  app.get("/ID-numbers/EUIP/department", controller.department_id);
  app.get("/ID-numbers/EUIP/case-type", controller.case_type_id);
  app.get("/ID-numbers/EUIP/decision-stage", controller.decision_stage_id);
};
