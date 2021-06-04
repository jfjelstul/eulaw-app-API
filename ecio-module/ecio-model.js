const connection = require.main.require("./ecio-module/ecio-connection.js");
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

model.commissions = (parameters, callback) => {
  var { commission_id, member_state_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "commission_id", commission_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("commissions", conditions, parameters, connection, callback);
};

model.departments = (parameters, callback) => {
  var { department_type_id, department_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "department_type_id", department_type_id);
  conditions = equalTo(conditions, "department_id", department_id);
  modelHandler("departments", conditions, parameters, connection, callback);
};

model.departments_by_commission = (parameters, callback) => {
  var { commission_id, department_type_id, department_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "commission_id", commission_id);
  conditions = equalTo(conditions, "department_type_id", department_type_id);
  conditions = equalTo(conditions, "department_id", department_id);
  modelHandler("departments_by_commission", conditions, parameters, connection, callback);
};

model.commissioners = (parameters, callback) => {
  var { commissioner_id, member_state_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "commissioner_id", commissioner_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("commissioners", conditions, parameters, connection, callback);
};

model.commissioners_by_commission = (parameters, callback) => {
  var { commission_id, commissioner_id, member_state_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "commission_id", commission_id);
  conditions = equalTo(conditions, "commissioner_id", commissioner_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("commissioners_by_commission", conditions, parameters, connection, callback);
};

model.policy_areas = (parameters, callback) => {
  var { policy_area_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "policy_area_id", policy_area_id);
  modelHandler("policy_areas", conditions, parameters, connection, callback);
};

model.portfolio_allocations = (parameters, callback) => {
  var { commission_id, commissioner_id, member_state_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "commission_id", commission_id);
  conditions = equalTo(conditions, "commissioner_id", commissioner_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("portfolio_allocations", conditions, parameters, connection, callback);
};

model.department_allocations = (parameters, callback) => {
  var { commission_id, commissioner_id, member_state_id, department_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "commission_id", commission_id);
  conditions = equalTo(conditions, "commissioner_id", commissioner_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "department_id", department_id);
  modelHandler("department_allocations", conditions, parameters, connection, callback);
};

model.policy_area_allocations = (parameters, callback) => {
  var { commission_id, commissioner_id, member_state_id, policy_area_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "commission_id", commission_id);
  conditions = equalTo(conditions, "commissioner_id", commissioner_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "policy_area_id", policy_area_id);
  modelHandler("policy_area_allocations", conditions, parameters, connection, callback);
};

model.department_histories = (parameters, callback) => {
  var { current_department_id, current_department_type_id, department_id, department_type_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "current_department_id", current_department_id);
  conditions = equalTo(conditions, "current_department_type_id", current_department_type_id);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "department_type_id", department_type_id);
  modelHandler("department_histories", conditions, parameters, connection, callback);
};

model.policy_area_histories = (parameters, callback) => {
  var { policy_area_id, department_id, department_type_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "policy_area_id", policy_area_id);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "department_type_id", department_type_id);
  modelHandler("policy_area_histories", conditions, parameters, connection, callback);
};

model.commission_id = (parameters, callback) => {
  modelHandlerValues("commissions", "commission_id", "commission", connection, callback);
}

model.commissioner_id = (parameters, callback) => {
  modelHandlerValues("commissioners", "commissioner_id", "full_name", connection, callback);
}

model.department_id = (parameters, callback) => {
  modelHandlerValues("departments", "department_id", "department_name", connection, callback);
}

model.department_type_id = (parameters, callback) => {
  modelHandlerValues("departments", "department_type_id", "department_type", connection, callback);
}

model.current_department_id = (parameters, callback) => {
  modelHandlerValues("department_histories", "current_department_id", "current_department_name", connection, callback);
}

model.current_department_type_id = (parameters, callback) => {
  modelHandlerValues("department_histories", "current_department_type_id", "current_department_type", connection, callback);
}

model.member_state_id = (parameters, callback) => {
  modelHandlerValues("commissioners", "member_state_id", "member_state", connection, callback);
}

model.policy_area_id = (parameters, callback) => {
  modelHandlerValues("policy_areas", "policy_area_id", "policy_area", connection, callback);
}

module.exports = model;
