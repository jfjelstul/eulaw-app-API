const model = require.main.require("./euip-module/euip-model.js");
const controllerHandler = require.main.require("./utilities/controller-handler.js");

const controller = {};

controller.datasets = function (req, res) {
  controllerHandler (req, res, model.datasets);
};

controller.variables = function (req, res) {
  controllerHandler (req, res, model.variables);
};

controller.cases = function (req, res) {
  controllerHandler (req, res, model.cases);
};

controller.cases_ts = function (req, res) {
  controllerHandler (req, res, model.cases_ts);
};

controller.cases_ts_ct = function (req, res) {
  controllerHandler (req, res, model.cases_ts_ct);
};

controller.cases_csts_ms = function (req, res) {
  controllerHandler (req, res, model.cases_csts_ms);
};

controller.cases_csts_ms_ct = function (req, res) {
  controllerHandler (req, res, model.cases_csts_ms_ct);
};

controller.cases_csts_dp = function (req, res) {
  controllerHandler (req, res, model.cases_csts_dp);
};

controller.cases_csts_dp_ct = function (req, res) {
  controllerHandler (req, res, model.cases_csts_dp_ct);
};

controller.cases_ddy = function (req, res) {
  controllerHandler (req, res, model.cases_ddy);
};

controller.cases_ddy_ct = function (req, res) {
  controllerHandler (req, res, model.cases_ddy_ct);
};

controller.cases_net = function (req, res) {
  controllerHandler (req, res, model.cases_net);
};

controller.cases_net_ct = function (req, res) {
  controllerHandler (req, res, model.cases_net_ct);
};

controller.decisions = function (req, res) {
  controllerHandler (req, res, model.decisions);
};

controller.decisions_ts = function (req, res) {
  controllerHandler (req, res, model.decisions_ts);
};

controller.decisions_ts_ct = function (req, res) {
  controllerHandler (req, res, model.decisions_ts_ct);
};

controller.decisions_csts_ms = function (req, res) {
  controllerHandler (req, res, model.decisions_csts_ms);
};

controller.decisions_csts_ms_ct = function (req, res) {
  controllerHandler (req, res, model.decisions_csts_ms_ct);
};

controller.decisions_csts_dp = function (req, res) {
  controllerHandler (req, res, model.decisions_csts_dp);
};

controller.decisions_csts_dp_ct = function (req, res) {
  controllerHandler (req, res, model.decisions_csts_dp_ct);
};

controller.decisions_ddy = function (req, res) {
  controllerHandler (req, res, model.decisions_ddy);
};

controller.decisions_ddy_ct = function (req, res) {
  controllerHandler (req, res, model.decisions_ddy_ct);
};

controller.decisions_net = function (req, res) {
  controllerHandler (req, res, model.decisions_net);
};

controller.decisions_net_ct = function (req, res) {
  controllerHandler (req, res, model.decisions_net_ct);
};

controller.member_state_id = function (req, res) {
  controllerHandler (req, res, model.member_state_id);
};

controller.department_id = function (req, res) {
  controllerHandler (req, res, model.department_id);
};

controller.case_type_id = function (req, res) {
  controllerHandler (req, res, model.case_type_id);
};

controller.decision_stage_id = function (req, res) {
  controllerHandler (req, res, model.decision_stage_id);
};


module.exports = controller;
