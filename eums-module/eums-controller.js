const model = require.main.require("./eums-module/eums-model.js");
const controllerHandler = require.main.require("./utilities/controller-handler.js");

const controller = {};

controller.datasets = function (req, res) {
  controllerHandler (req, res, model.datasets);
};

controller.variables = function (req, res) {
  controllerHandler (req, res, model.variables);
};

controller.member_states = function (req, res) {
  controllerHandler (req, res, model.member_states);
};

controller.member_states_csts = function (req, res) {
  controllerHandler (req, res, model.member_states_csts);
};

controller.member_states_ddy = function (req, res) {
  controllerHandler (req, res, model.member_states_ddy);
};

controller.qmv_weights = function (req, res) {
  controllerHandler (req, res, model.qmv_weights);
};

controller.member_state_id = function (req, res) {
  controllerHandler (req, res, model.member_state_id);
};

module.exports = controller;
