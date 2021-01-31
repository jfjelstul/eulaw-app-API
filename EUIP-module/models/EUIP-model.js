
// import that MariaDB collection
const databaseConnection = require.main.require("./EUIP-module/connection/EUIP-database-connection.js");

// import the download module
const downloadResource = require.main.require("./utilities/download.js");

// define a new constructor
const model = {};

// one method in this object per route
// each method a query to the database
// basis for each handler function

// define a method that queries the database and filters the data
model.cases = function(parameters, queryResult) {

  // get filter values
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var memberState = parameters.query.memberState;
  var directorateGeneral = parameters.query.directorateGeneral;
  var caseNumber = parameters.query.caseNumber;
  var caseType = parameters.query.caseType;
  var directive = parameters.query.directive;
  var directiveNumber = parameters.query.directiveNumber;
  var celexNumber = parameters.query.celexNumber;
  var complete = parameters.query.complete;
  var stageLFN258 = parameters.query.LFN258;
  var stageRO258 = parameters.query.RO258;
  var stageRF258 = parameters.query.RF258;
  var stageLFN260 = parameters.query.LFN260;
  var stageRO260 = parameters.query.RO260;
  var stageRF260 = parameters.query.RF260;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  table = "cases";

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("case_year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("case_year <= ?");
    values.push(maxYear);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }
  if (typeof caseNumber !== "undefined") {
    conditions.push("case_number = ?");
    values.push(caseNumber);
  }
  if (typeof caseType !== "undefined") {
    conditions.push("case_type_ID = ?");
    values.push(caseType);
  }
  if (typeof directive !== "undefined") {
    conditions.push("directive = ?");
    values.push(directive);
  }
  if (typeof directiveNumber !== "undefined") {
    conditions.push("directive_number = ?");
    values.push(directiveNumber);
  }
  if (typeof celexNumber !== "undefined") {
    conditions.push("CELEX_number = ?");
    values.push(celexNumber);
  }
  if (typeof complete !== "undefined") {
    conditions.push("complete = ?");
    values.push(complete);
  }
  if (typeof stageLFN258 !== "undefined") {
    conditions.push("stage_LFN258 = ?");
    values.push(stageLFN258);
  }
  if (typeof stageRO258 !== "undefined") {
    conditions.push("stage_RO258 = ?");
    values.push(stageRO258);
  }
  if (typeof stageRF258 !== "undefined") {
    conditions.push("stage_RF258 = ?");
    values.push(stageRF258);
  }
  if (typeof stageLFN260 !== "undefined") {
    conditions.push("stage_LFN260 = ?");
    values.push(stageLFN260);
  }
  if (typeof stageRO260 !== "undefined") {
    conditions.push("stage_RO260 = ?");
    values.push(stageRO260);
  }
  if (typeof stageRF260 !== "undefined") {
    conditions.push("stage_RF260 = ?");
    values.push(stageRF260);
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query the MariaDB database
  // first parameter is the query string
  // second parameter is an array of values to put in
  // third parameter is a callback function with parameters for the error, result, and fields (optional)
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

// define a method that queries the database and filters the data
model.casesTS = function(parameters, queryResult) {

  // get filter values
  var byCaseType = parameters.query.byCaseType;
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var caseType = parameters.query.caseType;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  var table = "cases_TS"
  if (byCaseType === "1") {
    table = "cases_TS_D"
  }

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query the MariaDB database
  // first parameter is the query string
  // second parameter is an array of values to put in
  // third parameter is a callback function with parameters for the error, result, and fields (optional)
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

// define a method that queries the database and filters the data
model.casesCSTS = function(parameters, queryResult) {

  // get filter values
  var byCaseType = parameters.query.byCaseType;
  var crossSection = parameters.query.crossSection;
  var memberState = parameters.query.memberState;
  var directorateGeneral = parameters.query.directorateGeneral;
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var caseType = parameters.query.caseType;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  var table = null
  if (byCaseType === "1") {
    if(crossSection === "MS") {
      table = "cases_CSTS_MS_D"
    } else if (crossSection === "DG") {
      table = "cases_CSTS_DG_D"
    }
  } else {
    if(crossSection === "MS") {
      table = "cases_CSTS_MS"
    } else if (crossSection === "DG") {
      table = "cases_CSTS_DG"
    }
  }

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }
  if (crossSection === "MS") {
    if (typeof memberState !== "undefined") {
      conditions.push("member_state_ID = ?");
      values.push(memberState);
    }
  }
  if (crossSection === "DG") {
    if (typeof directorateGeneral !== "undefined") {
      conditions.push("directorate_general_ID = ?");
      values.push(directorateGeneral);
    }
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query database
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

// define a method that queries the database and filters the data
model.casesDDY = function(parameters, queryResult) {

  // get filter values
  var byCaseType = parameters.query.byCaseType;
  var memberState = parameters.query.memberState;
  var directorateGeneral = parameters.query.directorateGeneral;
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var caseType = parameters.query.caseType;
  var network = parameters.query.network;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  var table = null
  if (byCaseType === "1") {
    if(network === "1") {
      table = "cases_network_D"
    } else {
      table = "cases_DDY_D"
    }
  } else {
    if(network === "1") {
      table = "cases_network"
    } else {
      table = "cases_DDY"
    }
  }

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query database
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

// define a method that queries the database and filters the data
model.decisions = function(parameters, queryResult) {

  // get filter values
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var memberState = parameters.query.memberState;
  var directorateGeneral = parameters.query.directorateGeneral;
  var caseNumber = parameters.query.caseNumber;
  var caseType = parameters.query.caseType;
  var directive = parameters.query.directive;
  var directiveNumber = parameters.query.directiveNumber;
  var celexNumber = parameters.query.celexNumber;
  var decisionStage = parameters.query.decisionStage;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  table = "decisions";

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("decision_year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("decision_year <= ?");
    values.push(maxYear);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }
  if (typeof caseNumber !== "undefined") {
    conditions.push("case_number = ?");
    values.push(caseNumber);
  }
  if (typeof caseType !== "undefined") {
    conditions.push("case_type_ID = ?");
    values.push(caseType);
  }
  if (typeof directive !== "undefined") {
    conditions.push("directive = ?");
    values.push(directive);
  }
  if (typeof directiveNumber !== "undefined") {
    conditions.push("directive_number = ?");
    values.push(directiveNumber);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (typeof stageLFN258 !== "undefined") {
    conditions.push("stage_LFN258 = ?");
    values.push(stageLFN258);
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query the MariaDB database
  // first parameter is the query string
  // second parameter is an array of values to put in
  // third parameter is a callback function with parameters for the error, result, and fields (optional)
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

// define a method that queries the database and filters the data
model.decisionsTS = function(parameters, queryResult) {

  // get filter values
  var byCaseType = parameters.query.byCaseType;
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var decisionStage = parameters.query.decisionStage;
  var caseType = parameters.query.caseType;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  var table = "decisions_TS"
  if (byCaseType === "1") {
    table = "decisions_TS_D"
  }

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query the MariaDB database
  // first parameter is the query string
  // second parameter is an array of values to put in
  // third parameter is a callback function with parameters for the error, result, and fields (optional)
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

// define a method that queries the database and filters the data
model.decisionsCSTS = function(parameters, queryResult) {

  // get filter values
  var byCaseType = parameters.query.byCaseType;
  var crossSection = parameters.query.crossSection;
  var memberState = parameters.query.memberState;
  var directorateGeneral = parameters.query.directorateGeneral;
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var decisionStage = parameters.query.decisionStage;
  var caseType = parameters.query.caseType;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  var table = null
  if (byCaseType === "1") {
    if(crossSection === "MS") {
      table = "decisions_CSTS_MS_D"
    } else if (crossSection === "DG") {
      table = "decisions_CSTS_DG_D"
    }
  } else {
    if(crossSection === "MS") {
      table = "decisions_CSTS_MS"
    } else if (crossSection === "DG") {
      table = "decisions_CSTS_DG"
    }
  }

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }
  if (crossSection === "MS") {
    if (typeof memberState !== "undefined") {
      conditions.push("member_state_ID = ?");
      values.push(memberState);
    }
  }
  if (crossSection === "DG") {
    if (typeof directorateGeneral !== "undefined") {
      conditions.push("directorate_general_ID = ?");
      values.push(directorateGeneral);
    }
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query database
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

// define a method that queries the database and filters the data
model.decisionsDDY = function(parameters, queryResult) {

  // get filter values
  var byCaseType = parameters.query.byCaseType;
  var minYear = parameters.query.minYear;
  var maxYear = parameters.query.maxYear;
  var decisionStage = parameters.query.decisionStage;
  var memberState = parameters.query.memberState;
  var directorateGeneral = parameters.query.directorateGeneral;
  var caseType = parameters.query.caseType;
  var network = parameters.query.network;
  var download = parameters.query.download;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  var table = null
  if (byCaseType === "1") {
    if(network === "1") {
      table = "decisions_network_D"
    } else {
      table = "decisions_DDY_D"
    }
  } else {
    if(network === "1") {
      table = "decisions_network"
    } else {
      table = "decisions_DDY"
    }
  }

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof decisionStage !== "undefined") {
    conditions.push("decision_stage_ID = ?");
    values.push(decisionStage);
  }
  if (byCaseType === "1") {
    if (typeof caseType !== "undefined") {
      conditions.push("case_type_ID = ?");
      values.push(caseType);
    }
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof directorateGeneral !== "undefined") {
    conditions.push("directorate_general_ID = ?");
    values.push(directorateGeneral);
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions;

  // query database
  databaseConnection.query (sql, values, function(err, json) {
    if (err) {
      queryResult("error", err);
    } else {
      if(download === "1") {
        const csv = downloadResource(json);
        queryResult("csv", csv);
      } else {
        queryResult("json", json);
      }
    }
  });
};

module.exports = model;
