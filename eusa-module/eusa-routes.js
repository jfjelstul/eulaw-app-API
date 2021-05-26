const controller = require.main.require("./eusa-module/eusa-controller.js");

module.exports = app => {

  app.get("/databases/EUSA", controller.datasets);

  app.get("/databases/EUSA/cases", controller.cases);
  app.get("/databases/EUSA/cases/TS", controller.cases_ts);
  app.get("/databases/EUSA/cases/TS/case-type", controller.cases_ts_ct);
  app.get("/databases/EUSA/cases/CSTS/member-state", controller.cases_csts_ms);
  app.get("/databases/EUSA/cases/CSTS/member-state/case-type", controller.cases_csts_ms_ct);
  app.get("/databases/EUSA/cases/CSTS/department", controller.cases_csts_dp);
  app.get("/databases/EUSA/cases/CSTS/department/case-type", controller.cases_csts_dp_ct);
  app.get("/databases/EUSA/cases/DDY", controller.cases_ddy);
  app.get("/databases/EUSA/cases/DDY/case-type", controller.cases_ddy_ct);
  app.get("/databases/EUSA/cases/network", controller.cases_net);
  app.get("/databases/EUSA/cases/network/case-type", controller.cases_net);

  app.get("/databases/EUSA/decisions", controller.decisions);
  app.get("/databases/EUSA/decisions/TS", controller.decisions_ts);
  app.get("/databases/EUSA/decisions/TS/case-type", controller.decisions_ts_ct);
  app.get("/databases/EUSA/decisions/CSTS/member-state", controller.decisions_csts_ms);
  app.get("/databases/EUSA/decisions/CSTS/member-state/case-type", controller.decisions_csts_ms_ct);
  app.get("/databases/EUSA/decisions/CSTS/department", controller.decisions_csts_dp);
  app.get("/databases/EUSA/decisions/CSTS/department/case-type", controller.decisions_csts_dp_ct);
  app.get("/databases/EUSA/decisions/DDY", controller.decisions_ddy);
  app.get("/databases/EUSA/decisions/DDY/case-type", controller.decisions_ddy_ct);
  app.get("/databases/EUSA/decisions/network", controller.decisions_net);
  app.get("/databases/EUSA/decisions/network/case-type", controller.decisions_net_ct);

  app.get("/databases/EUSA/awards", controller.awards);
  app.get("/databases/EUSA/awards/CSTS", controller.awards_csts);
  app.get("/databases/EUSA/awards/CSTS/beneficiary-type", controller.awards_csts_bt);
  app.get("/databases/EUSA/awards/CSTS/aid-instrument", controller.awards_csts_ai);
  app.get("/databases/EUSA/awards/CSTS/NACE-sector", controller.awards_csts_ns);

  app.get("/databases/EUSA/codebook", controller.codebook);

  app.get("/ID-numbers/EUSA/member-state", controller.member_state_id);
  app.get("/ID-numbers/EUSA/department", controller.department_id);
  app.get("/ID-numbers/EUSA/case-type", controller.case_type_id);
  app.get("/ID-numbers/EUSA/decision-type", controller.decision_type_id);
  app.get("/ID-numbers/EUSA/beneficiary-type", controller.beneficiary_type_id);
  app.get("/ID-numbers/EUSA/aid-instrument", controller.aid_instrument_id);
  app.get("/ID-numbers/EUSA/NACE-sector", controller.nace_sector_id);
};
