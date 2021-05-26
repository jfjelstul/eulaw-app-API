const connection = require.main.require("./eums-module/eums-connection.js");
const modelHandler = require.main.require("./utilities/model-handler.js");
const modelHandlerValues = require.main.require("./utilities/model-handler-values.js");
const { equalTo, greaterThan, lessThan } = require.main.require("./utilities/conditions.js")

const model = {};

model.datasets = (tables, callback) => {
  sql = "SELECT DISTINCT dataset_id, dataset FROM codebook";
  connection.query(sql, function(error, results) {
    if (error) {
      callback("error", error);
    } else {
      callback("json", results);
    }
  });
};

model.member_states = (parameters, callback) => {
  var { member_state_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("member_states", conditions, parameters, connection, callback);
};

model.member_states_csts = (parameters, callback) => {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("member_states_csts", conditions, parameters, connection, callback);
};

model.member_states_ddy = (parameters, callback) => {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("member_states_ddy", conditions, parameters, connection, callback);
};

model.qmv_weights = (parameters, callback) => {
  var { member_state_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("qmv_weights", conditions, parameters, connection, callback);
};

model.codebook = function(parameters, callback) {
  var { dataset } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "dataset", dataset);
  modelHandler("codebook", conditions, parameters, connection, callback);
};

model.member_state_id = (parameters, callback) => {
  modelHandlerValues("member_states", "member_state_id", "member_state", connection, callback);
}

module.exports = model;
