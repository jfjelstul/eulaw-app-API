const connection = require.main.require("./eusa-module/eusa-connection.js");
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

model.cases = (parameters, callback) => {
  var { case_id, member_state_id, department_id, case_type_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "case_id", case_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  modelHandler("cases", conditions, parameters, connection, callback);
};

model.cases_ts = (parameters, callback) => {
  var { year_min, year_max } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  modelHandler("cases_ts", conditions, parameters, connection, callback);
};

model.cases_ts_ct = (parameters, callback) => {
  var { year_min, year_max, case_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  modelHandler("cases_ts_ct", conditions, parameters, connection, callback);
};

model.cases_csts_ms = (parameters, callback) => {
  var { year_min, year_max, member_state_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("cases_csts_ms", conditions, parameters, connection, callback);
};

model.cases_csts_ms_ct = (parameters, callback) => {
  var { year_min, year_max, member_state_id, case_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  modelHandler("cases_csts_ms_ct", conditions, parameters, connection, callback);
};

model.cases_csts_dp = (parameters, callback) => {
  var { year_min, year_max, department_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  modelHandler("cases_csts_dp", conditions, parameters, connection, callback);
};

model.cases_csts_dp_ct = (parameters, callback) => {
  var { year_min, year_max, department_id, case_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  modelHandler("cases_csts_dp_ct", conditions, parameters, connection, callback);
};

model.cases_ddy = (parameters, callback) => {
  var { year_min, year_max, department_id, member_state_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("cases_ddy", conditions, parameters, connection, callback);
};

model.cases_ddy_ct = (parameters, callback) => {
  var { year_min, year_max, department_id, member_state_id, case_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  modelHandler("cases_ddy_ct", conditions, parameters, connection, callback);
};

model.cases_net = (parameters, callback) => {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("cases_net", conditions, parameters, connection, callback);
};

model.cases_net_ct = (parameters, callback) => {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("cases_net_ct", conditions, parameters, connection, callback);
};

model.decisions = (parameters, callback) => {
  var { case_id, member_state_id, department_id, case_type_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "case_id", case_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions", conditions, parameters, connection, callback);
};

model.decisions_ts = (parameters, callback) => {
  var { year_min, year_max, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_ts", conditions, parameters, connection, callback);
};

model.decisions_ts_ct = (parameters, callback) => {
  var { year_min, year_max, case_type_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_ts_ct", conditions, parameters, connection, callback);
};

model.decisions_csts_ms = (parameters, callback) => {
  var { year_min, year_max, member_state_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_csts_ms", conditions, parameters, connection, callback);
};

model.decisions_csts_ms_ct = (parameters, callback) => {
  var { year_min, year_max, member_state_id, case_type_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_csts_ms_ct", conditions, parameters, connection, callback);
};

model.decisions_csts_dp = (parameters, callback) => {
  var { year_min, year_max, department_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_csts_dp", conditions, parameters, connection, callback);
};

model.decisions_csts_dp_ct = (parameters, callback) => {
  var { year_min, year_max, department_id, case_type_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_csts_dp_ct", conditions, parameters, connection, callback);
};

model.decisions_ddy = (parameters, callback) => {
  var { year_min, year_max, department_id, member_state_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_ddy", conditions, parameters, connection, callback);
};

model.decisions_ddy_ct = (parameters, callback) => {
  var { year_min, year_max, department_id, member_state_id, case_type_id, decision_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "department_id", department_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "case_type_id", case_type_id);
  conditions = equalTo(conditions, "decision_type_id", decision_type_id);
  modelHandler("decisions_ddy_ct", conditions, parameters, connection, callback);
};

model.decisions_net = (parameters, callback) => {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("decisions_net", conditions, parameters, connection, callback);
};

model.decisions_net_ct = (parameters, callback) => {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("decisions_net_ct", conditions, parameters, connection, callback);
};

model.awards = (parameters, callback) => {
  var { case_id, member_state_id, beneficiary_type_id, nace_sector_id, aid_instrument_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "case_id", case_id);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "beneficiary_type_id", beneficiary_type_id);
  conditions = equalTo(conditions, "nace_sector_id", nace_sector_id);
  conditions = equalTo(conditions, "aid_instrument_id", aid_instrument_id);
  modelHandler("awards", conditions, parameters, connection, callback);
};

model.awards_csts = (parameters, callback) => {
  var { year_min, year_max, member_state_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  modelHandler("awards_csts", conditions, parameters, connection, callback);
};

model.awards_csts_bt = (parameters, callback) => {
  var { year_min, year_max, member_state_id, beneficiary_type_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "beneficiary_type_id", beneficiary_type_id);
  modelHandler("awards_csts_bt", conditions, parameters, connection, callback);
};

model.awards_csts_ai = (parameters, callback) => {
  var { year_min, year_max, member_state_id, aid_instrument_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "aid_instrument_id", aid_instrument_id);
  modelHandler("awards_csts_ai", conditions, parameters, connection, callback);
};

model.awards_csts_ns = (parameters, callback) => {
  var { year_min, year_max, member_state_id, nace_sector_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "member_state_id", member_state_id);
  conditions = equalTo(conditions, "nace_sector_id", nace_sector_id);
  modelHandler("awards_csts_ns", conditions, parameters, connection, callback);
};

model.codebook = (parameters, callback) => {
  var { dataset } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "dataset", dataset);
  modelHandler("codebook", conditions, parameters, connection, callback);
};

model.member_state_id = (parameters, callback) => {
  modelHandlerValues("cases_csts_ms", "member_state_id", "member_state", connection, callback);
}

model.department_id = (parameters, callback) => {
  modelHandlerValues("cases_csts_dp", "department_id", "department", connection, callback);
}

model.case_type_id = (parameters, callback) => {
  modelHandlerValues("cases_ts_ct", "case_type_id", "case_type", connection, callback);
}

model.decision_type_id = (parameters, callback) => {
  modelHandlerValues("decisions_ts", "decision_type_id", "decision_type", connection, callback);
}

model.beneficiary_type_id = (parameters, callback) => {
  modelHandlerValues("awards_csts_bt", "beneficiary_type_id", "beneficiary_type", connection, callback);
}

model.aid_instrument_id = (parameters, callback) => {
  modelHandlerValues("awards_csts_ai", "aid_instrument_id", "aid_instrument", connection, callback);
}
model.nace_sector_id = (parameters, callback) => {
  modelHandlerValues("awards_csts_ns", "nace_sector_id", "nace_sector", connection, callback);
}

module.exports = model;
