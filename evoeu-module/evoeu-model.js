const connection = require.main.require("./evoeu-module/evoeu-connection.js");
const modelHandler = require.main.require("./utilities/model-handler.js");
const modelHandlerValues = require.main.require("./utilities/model-handler-values.js");
const { equalTo, greaterThan, lessThan } = require.main.require("./utilities/conditions.js")

const model = {};

model.datasets = function(parameters, callback) {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("datasets", conditions, parameters, connection, callback);
};

model.variables = function(parameters, callback) {
  var { dataset } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "dataset", dataset);
  modelHandler("variables", conditions, parameters, connection, callback);
};

model.nodes = (parameters, callback) => {
  var { node_type_id, year_min, year_max } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "node_type_id", node_type_id);
  modelHandler("nodes", conditions, parameters, connection, callback);
};

model.edges = (parameters, callback) => {
  var { edge_type_id, outgoing_node_type_id, incoming_node_type_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "edge_type_id", edge_type_id);
  conditions = equalTo(conditions, "outgoing_node_type_id", outgoing_node_type_id);
  conditions = equalTo(conditions, "incoming_node_type_id", incoming_node_type_id);
  modelHandler("edges", conditions, parameters, connection, callback);
};

model.node_type_id = (parameters, callback) => {
  modelHandlerValues("nodes", "node_type_id", "node_type", connection, callback);
}

model.incoming_node_type_id = (parameters, callback) => {
  modelHandlerValues("edges", "incoming_node_type_id", "incoming_node_type", connection, callback);
}

model.outgoing_node_type_id = (parameters, callback) => {
  modelHandlerValues("edges", "outgoing_node_type_id", "outgoing_node_type", connection, callback);
}

model.edge_type_id = (parameters, callback) => {
  modelHandlerValues("edges", "edge_type_id", "edge_type", connection, callback);
}

module.exports = model;
