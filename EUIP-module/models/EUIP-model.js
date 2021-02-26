
const databaseConnection = require.main.require("./EUIP-module/connection/EUIP-database-connection.js");

const downloadResource = require.main.require("./utilities/download.js");

const model = {};

const defaultLimit = 1000;

model.cases = function(parameters, queryResult) {

  var { minYear, maxYear, memberState, directorateGeneral,
    caseNumber, caseType, directive, directiveNumber, celexNumber, complete,
    stageLFN258, stageRO258, stageRF258, stageLFN260, stageRO260, stageRF260,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "cases";

  if (typeof minYear != "undefined") {
    conditions.push("case_year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("case_year <= ?");
    values.push(maxYear);
  }
  if (typeof memberState != "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral != "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }
  if (typeof caseNumber != "undefined") {
    conditions.push("case_number = ?");
    values.push(caseNumber);
  }
  if (typeof caseType != "undefined") {
    conditions.push("case_type_ID = ?");
    values.push(caseType);
  }
  if (typeof directive != "undefined") {
    conditions.push("directive = ?");
    values.push(directive);
  }
  if (typeof directiveNumber != "undefined") {
    conditions.push("directive_number = ?");
    values.push(directiveNumber);
  }
  if (typeof celexNumber != "undefined") {
    conditions.push("CELEX_number = ?");
    values.push(celexNumber);
  }
  if (typeof complete != "undefined") {
    conditions.push("complete = ?");
    values.push(complete);
  }
  if (typeof stageLFN258 != "undefined") {
    conditions.push("stage_LFN258 = ?");
    values.push(stageLFN258);
  }
  if (typeof stageRO258 != "undefined") {
    conditions.push("stage_RO258 = ?");
    values.push(stageRO258);
  }
  if (typeof stageRF258 != "undefined") {
    conditions.push("stage_RF258 = ?");
    values.push(stageRF258);
  }
  if (typeof stageLFN260 != "undefined") {
    conditions.push("stage_LFN260 = ?");
    values.push(stageLFN260);
  }
  if (typeof stageRO260 != "undefined") {
    conditions.push("stage_RO260 = ?");
    values.push(stageRO260);
  }
  if (typeof stageRF260 != "undefined") {
    conditions.push("stage_RF260 = ?");
    values.push(stageRF260);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.cases_TS = function(parameters, queryResult) {

  var { byCaseType, minYear, maxYear, caseType, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  var table = "cases_TS"
  if (byCaseType == "1") {
    table = "cases_TS_D"
  }

  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.cases_CSTS_MS = function(parameters, queryResult) {

  var { byCaseType, memberState, minYear, maxYear, caseType,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "cases_CSTS_MS";
  if (byCaseType == "1") {
    table = "cases_CSTS_MS_D"
  }

  if (typeof memberState != "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.cases_CSTS_DG = function(parameters, queryResult) {

  var { byCaseType, directorateGeneral, minYear, maxYear, caseType,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "cases_CSTS_DG";
  if (byCaseType == "1") {
    table = "cases_CSTS_DG_D"
  }

  if (typeof directorateGeneral != "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }
  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.cases_DDY = function(parameters, queryResult) {

  var { byCaseType, memberState, directorateGeneral, minYear, maxYear,
    caseType, network, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  var table = null
  if (byCaseType == "1") {
    if(network == "1") {
      table = "cases_network_D"
    } else {
      table = "cases_DDY_D"
    }
  } else {
    if(network == "1") {
      table = "cases_network"
    } else {
      table = "cases_DDY"
    }
  }

  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }
  if (typeof memberState != "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral != "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.decisions = function(parameters, queryResult) {

  var { minYear, maxYear, memberState, directorateGeneral, caseNumber, caseType,
    directive, directiveNumber, celexNumber, decisionStage, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "decisions";

  if (typeof minYear != "undefined") {
    conditions.push("decision_year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("decision_year <= ?");
    values.push(maxYear);
  }
  if (typeof memberState != "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral != "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }
  if (typeof caseNumber != "undefined") {
    conditions.push("case_number = ?");
    values.push(caseNumber);
  }
  if (typeof caseType != "undefined") {
    conditions.push("case_type_ID = ?");
    values.push(caseType);
  }
  if (typeof directive != "undefined") {
    conditions.push("directive = ?");
    values.push(directive);
  }
  if (typeof directiveNumber != "undefined") {
    conditions.push("directive_number = ?");
    values.push(directiveNumber);
  }
  if (typeof decisionStage != "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (typeof stageLFN258 != "undefined") {
    conditions.push("stage_LFN258 = ?");
    values.push(stageLFN258);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.decisions_TS = function(parameters, queryResult) {

  var { byCaseType, minYear, maxYear, caseType, decisionStage,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "decisions_TS"
  if (byCaseType == "1") {
    table = "decisions_TS_D"
  }

  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof decisionStage != "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.decisions_CSTS_MS = function(parameters, queryResult) {

  var { byCaseType, memberState, minYear, maxYear, caseType, decisionStage,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "decisions_CSTS_MS";
  if (byCaseType == "1") {
    table = "decisions_CSTS_MS_D";
  }

  if (typeof memberState != "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof decisionStage != "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.decisions_CSTS_DG = function(parameters, queryResult) {

  var { byCaseType, directorateGeneral, minYear, maxYear, caseType, decisionStage,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "decisions_CSTS_DG";
  if (byCaseType == "1") {
    table = "decisions_CSTS_DG_D";
  }

  if (typeof directorateGeneral != "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }
  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof decisionStage != "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.decisions_DDY = function(parameters, queryResult) {

  var { byCaseType, minYear, maxYear, memberState, directorateGeneral,
    caseType, decisionStage, network, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = null
  if (byCaseType == "1") {
    if(network == "1") {
      table = "decisions_network_D"
    } else {
      table = "decisions_DDY_D"
    }
  } else {
    if(network == "1") {
      table = "decisions_network"
    } else {
      table = "decisions_DDY"
    }
  }

  if (typeof minYear != "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear != "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof decisionStage != "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (byCaseType == "1") {
    if (typeof caseType != "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }
  if (typeof memberState != "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral != "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.codebook = function(parameters, queryResult) {

  var { dataset, download } = parameters.query;

  var conditions = [];
  var values = [];

  var table = "codebook";

  if (typeof dataset != "undefined") {
    conditions.push("dataset = ?");
    values.push(dataset);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

model.codebook_API = function(parameters, queryResult) {

  var { route, download } = parameters.query;

  var conditions = [];
  var values = [];

  var table = "API_codebook";

  if (typeof route != "undefined") {
    conditions.push("API_route = ?");
    values.push(route);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions;

  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

module.exports = model;
