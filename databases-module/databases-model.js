const connection = require.main.require("./databases-module/databases-connection.js");
const modelHandler = require.main.require("./utilities/model-handler.js");
const modelHandlerValues = require.main.require("./utilities/model-handler-values.js");
const { equalTo, greaterThan, lessThan } = require.main.require("./utilities/conditions.js")

const model = {};

model.databases = function(parameters, callback) {
  var { code } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "code", code);
  modelHandler("eulaw_databases", conditions, parameters, connection, callback);
};

module.exports = model;
