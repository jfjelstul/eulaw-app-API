const model = require.main.require("./ecio-module/ecio-model.js");
const controllerHandler = require.main.require("./utilities/controller-handler.js");

const controller = {};

controller.datasets = function (req, res) {
  controllerHandler (req, res, model.datasets);
};

controller.variables = function (req, res) {
  controllerHandler (req, res, model.variables);
};

controller.commissions = function (req, res) {
  controllerHandler (req, res, model.commissions);
};

controller.departments = function (req, res) {
  controllerHandler (req, res, model.departments);
};

controller.departments_by_commission = function (req, res) {
  controllerHandler (req, res, model.departments_by_commission);
};

controller.commissioners = function (req, res) {
  controllerHandler (req, res, model.commissioners);
};

controller.commissioners_by_commission = function (req, res) {
  controllerHandler (req, res, model.commissioners_by_commission);
};

controller.policy_areas = function (req, res) {
  controllerHandler (req, res, model.policy_areas);
};

controller.portfolio_allocations = function (req, res) {
  controllerHandler (req, res, model.portfolio_allocations);
};

controller.department_allocations = function (req, res) {
  controllerHandler (req, res, model.department_allocations);
};

controller.policy_area_allocations = function (req, res) {
  controllerHandler (req, res, model.policy_area_allocations);
};

controller.department_histories = function (req, res) {
  controllerHandler (req, res, model.department_histories);
};

controller.policy_area_histories = function (req, res) {
  controllerHandler (req, res, model.policy_area_histories);
};

controller.commission_id = function (req, res) {
  controllerHandler (req, res, model.commission_id);
};

controller.commissioner_id = function (req, res) {
  controllerHandler (req, res, model.commissioner_id);
};

controller.member_state_id = function (req, res) {
  controllerHandler (req, res, model.member_state_id);
};

controller.department_id = function (req, res) {
  controllerHandler (req, res, model.department_id);
};

controller.department_type_id = function (req, res) {
  controllerHandler (req, res, model.department_type_id);
};

controller.current_department_id = function (req, res) {
  controllerHandler (req, res, model.current_department_id);
};

controller.current_department_type_id = function (req, res) {
  controllerHandler (req, res, model.current_department_type_id);
};

controller.policy_area_id = function (req, res) {
  controllerHandler (req, res, model.policy_area_id);
};

module.exports = controller;
