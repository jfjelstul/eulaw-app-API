const connection = require.main.require("./EUIP-module/connection/EUIP-database-connection.js");
const modelHandler = require.main.require("./utilities/model-handler.js");

const model = {};

model.cases = (parameters, callback) => {

  var { minYear, maxYear, memberState, directorateGeneral,
    caseNumber, caseType, directive, directiveNumber, celexNumber, complete,
    stageLFN258, stageRO258, stageRF258, stageLFN260, stageRO260, stageRF260 } = parameters.query;

  var table = "cases";

  var conditions = [];

  if (typeof minYear !== "undefined") {
    conditions.push("case_year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("case_year<=" + maxYear);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID=" + memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID=" + directorateGeneral);
  }
  if (typeof caseNumber !== "undefined") {
    conditions.push("case_number=" + caseNumber);
  }
  if (typeof caseType !== "undefined") {
    conditions.push("case_type_ID=" + caseType);
  }
  if (typeof directive !== "undefined") {
    conditions.push("directive=" + directive);
  }
  if (typeof directiveNumber !== "undefined") {
    conditions.push("directive_number=" + directiveNumber);
  }
  if (typeof celexNumber !== "undefined") {
    conditions.push("CELEX_number=" + celexNumber);
  }
  if (typeof complete !== "undefined") {
    conditions.push("complete=" + complete);
  }
  if (typeof stageLFN258 !== "undefined") {
    conditions.push("stage_LFN258=" + stageLFN258);
  }
  if (typeof stageRO258 !== "undefined") {
    conditions.push("stage_RO258=" + stageRO258);
  }
  if (typeof stageRF258 !== "undefined") {
    conditions.push("stage_RF258=" + stageRF258);
  }
  if (typeof stageLFN260 !== "undefined") {
    conditions.push("stage_LFN260=" + stageLFN260);
  }
  if (typeof stageRO260 !== "undefined") {
    conditions.push("stage_RO260=" + stageRO260);
  }
  if (typeof stageRF260 !== "undefined") {
    conditions.push("stage_RF260=" + stageRF260);
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.cases_TS = function(parameters, callback) {

  var { byCaseType, minYear, maxYear, caseType } = parameters.query;

  var table = "cases_TS";
  if (byCaseType === "1") {
    table = "cases_TS_D";
  }

  var conditions = [];

  if (typeof minYear !== "undefined") {
    conditions.push("year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=" + maxYear);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=" + caseType);
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.cases_CSTS_MS = function(parameters, callback) {

  var { byCaseType, memberState, minYear, maxYear, caseType } = parameters.query;

  var table = "cases_CSTS_MS";
  if (byCaseType === "1") {
    table = "cases_CSTS_MS_D";
  }

  var conditions = [];

  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID=" + memberState);
  }
  if (typeof minYear !== "undefined") {
    conditions.push("year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=" + maxYear);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=" + caseTyle);
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.cases_CSTS_DG = function(parameters, callback) {

  var { byCaseType, directorateGeneral, minYear, maxYear, caseType } = parameters.query;

  var table = "cases_CSTS_DG";
  if (byCaseType === "1") {
    table = "cases_CSTS_DG_D";
  }

  var conditions = [];

  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID=" + directorateGeneral);
  }
  if (typeof minYear !== "undefined") {
    conditions.push("year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=" + maxYear);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=" + caseType);
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.cases_DDY = function(parameters, callback) {

  var { byCaseType, memberState, directorateGeneral, minYear, maxYear, caseType, network } = parameters.query;

  var table = null;
  if (byCaseType === "1") {
    if(network === "1") {
      table = "cases_network_D";
    } else {
      table = "cases_DDY_D";
    }
  } else {
    if(network === "1") {
      table = "cases_network";
    } else {
      table = "cases_DDY";
    }
  }

  var conditions = [];

  if (typeof minYear !== "undefined") {
    conditions.push("year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=" + maxYear);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID=" + memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID=" + directorateGeneral);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=" + byCaseType);
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.decisions = function(parameters, callback) {

  var { minYear, maxYear, memberState, directorateGeneral, caseNumber, caseType,
    directive, directiveNumber, celexNumber, decisionStage } = parameters.query;

  var table = "decisions";

  var conditions = [];

  if (typeof minYear !== "undefined") {
    conditions.push("decision_year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("decision_year<=" + maxYear);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID=" + memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID=" + directorateGeneral);
  }
  if (typeof caseNumber !== "undefined") {
    conditions.push("case_number=" + caseNumber);
  }
  if (typeof caseType !== "undefined") {
    conditions.push("case_type_ID=" + caseType);
  }
  if (typeof directive !== "undefined") {
    conditions.push("directive=" + directive);
  }
  if (typeof directiveNumber !== "undefined") {
    conditions.push("directive_number=" + directiveNumber);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID=" + decisionStage);
  }
  if (typeof stageLFN258 !== "undefined") {
    conditions.push("stage_LFN258=" + stageLFN258);
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.decisions_TS = function(parameters, callback) {

  var { byCaseType, minYear, maxYear, caseType, decisionStage } = parameters.query;

  var table = "decisions_TS"
  if (byCaseType === "1") {
    table = "decisions_TS_D"
  }

  var conditions = [];

  if (typeof minYear !== "undefined") {
    conditions.push("year>=");
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=");
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID=");
  }
  if (byCaseType == "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=");
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.decisions_CSTS_MS = function(parameters, callback) {

  var { byCaseType, memberState, minYear, maxYear, caseType, decisionStage } = parameters.query;

  var table = "decisions_CSTS_MS";
  if (byCaseType === "1") {
    table = "decisions_CSTS_MS_D";
  }

  var conditions = [];

  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID=" + memberState);
  }
  if (typeof minYear !== "undefined") {
    conditions.push("year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=" + maxYear);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID=" + decisionStage);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=" + byCaseType);
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.decisions_CSTS_DG = function(parameters, callback) {

  var { byCaseType, directorateGeneral, minYear, maxYear, caseType, decisionStage } = parameters.query;

  var conditions = [];

  var table = "decisions_CSTS_DG";
  if (byCaseType == "1") {
    table = "decisions_CSTS_DG_D";
  }

  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID=" + directorateGeneral);
  }
  if (typeof minYear !== "undefined") {
    conditions.push("year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=" + maxYear);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID=" + decisionStage);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=" + byCaseType);
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.decisions_DDY = function(parameters, callback) {

  var { byCaseType, minYear, maxYear, memberState, directorateGeneral,
    caseType, decisionStage, network } = parameters.query;

  var table = null;
  if (byCaseType == "1") {
    if(network == "1") {
      table = "decisions_network_D";
    } else {
      table = "decisions_DDY_D";
    }
  } else {
    if(network == "1") {
      table = "decisions_network";
    } else {
      table = "decisions_DDY";
    }
  }

  var conditions = [];

  if (typeof minYear !== "undefined") {
    conditions.push("year>=" + minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year<=" + maxYear);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID=" + decisionStage);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID=" + memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID=" + directorateGeneral);
  }
  if (byCaseType == "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID=" + caseType);
    }
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.codebook = function(parameters, callback) {

  var { dataset } = parameters.query;

  var table = "codebook";

  var conditions = [];

  if (typeof dataset !== "undefined") {
    conditions.push("dataset=" + dataset);
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

model.codebook_API = function(parameters, callback) {

  var { route, download } = parameters.query;

  var table = "API_codebook";

  var conditions = [];

  if (typeof route !== "undefined") {
    conditions.push("API_route=" + route);
  }

  modelHandler(table, conditions, parameters, connection, callback);
};

module.exports = model;
