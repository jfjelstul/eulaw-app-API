const model = require.main.require("./evoeu-module/evoeu-model.js");
const controllerHandler = require.main.require("./utilities/controller-handler.js");

const controller = {};

controller.datasets = function (req, res) {
  controllerHandler (req, res, model.datasets);
};

controller.variables = function (req, res) {
  controllerHandler (req, res, model.variables);
};

controller.nodes = function (req, res) {
  controllerHandler (req, res, model.nodes);
};

controller.edges = function (req, res) {
  controllerHandler (req, res, model.edges);
};

controller.node_type_id = function (req, res) {
  controllerHandler (req, res, model.node_type_id);
};

controller.incoming_node_type_id = function (req, res) {
  controllerHandler (req, res, model.incoming_node_type_id);
};

controller.outgoing_node_type_id = function (req, res) {
  controllerHandler (req, res, model.outgoing_node_type_id);
};

controller.edge_type_id = function (req, res) {
  controllerHandler (req, res, model.edge_type_id);
};

module.exports = controller;
