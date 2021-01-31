
// import the MariaDB connection
const databaseConnection = require.main.require("./EUSA-module/connection/EUSA-database-connection.js");

// import the download module
const downloadResource = require.main.require("./utilities/download.js");

// define a new constructor
const model = {};

// one method in this object per route
// each method a query to the database
// basis for each handler function

// define a method that queries the database and filters the data
model.cases = function(parameters, queryResult) {

  var { minYear, maxYear, memberState, directorateGeneral, caseNumber, caseType,
    exempt, preliminaryInvestigation, formalInvestigation, noObjection, notAid,
    positive, negative, conditional, withdrawal, referral, recovery,
    limit, offset, download } = parameters.query;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
  }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

  table = "cases";

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("notification_year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("notification_year <= ?");
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

  if (typeof exempt !== "undefined") {
    conditions.push("exempt = ?");
    values.push(exempt);
  }
  if (typeof preliminaryInvestigation !== "undefined") {
    conditions.push("preliminary_investigation = ?");
    values.push(preliminaryInvestigation);
  }
  if (typeof formalInvestigation !== "undefined") {
    conditions.push("formal_investigation = ?");
    values.push(formalInvestigation);
  }
  if (typeof noObjection !== "undefined") {
    conditions.push("no_objection = ?");
    values.push(noObjection);
  }
  if (typeof notAid !== "undefined") {
    conditions.push("not_aid = ?");
    values.push(notAid);
  }
  if (typeof positive !== "undefined") {
    conditions.push("positive = ?");
    values.push(positive);
  }
  if (typeof negative !== "undefined") {
    conditions.push("negative = ?");
    values.push(negative);
  }
  if (typeof conditional !== "undefined") {
    conditions.push("conditional = ?");
    values.push(conditional);
  }
  if (typeof withdrawal !== "undefined") {
    conditions.push("withdrawal = ?");
    values.push(withdrawal);
  }
  if (typeof referral !== "undefined") {
    conditions.push("referral = ?");
    values.push(referral);
  }
  if (typeof recovery !== "undefined") {
    conditions.push("recovery = ?");
    values.push(recovery);
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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
  var { byCaseType, minYear, maxYear, caseType, limit, offset, download } = parameters.query;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
  }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

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
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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
  var { byCaseType, crossSection, memberState, directorateGeneral,
    minYear, maxYear, caseType, limit, offset, download} = parameters.query;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
  }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

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
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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
  var { byCaseType, memberState, directorateGeneral, minYear, maxYear,
    caseType, network, limit, offset, download } = parameters.query;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
  }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

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
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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

model.decisions = function(parameters, queryResult) {

  // get filter values
  var { minYear, maxYear, memberState, directorateGeneral,
    caseNumber, caseType, decisionType, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
  }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

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
  if (typeof decisionType !== "undefined") {
    conditions.push("decision_type_ID = ?");
    values.push(decisionType);
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
  var { byCaseType, minYear, maxYear, decisionType, caseType, limit, offset, download } = parameters.query;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
  }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

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
  if (typeof decisionType !== "undefined") {
    conditions.push("decision_type_ID = ?");
    values.push(decisionType);
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
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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
  var { byCaseType, crossSection, memberState, directorateGeneral,
    minYear, maxYear, decisionType, caseType, limit, offset, download } = parameters.query;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
  }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

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
  if (typeof decisionType !== "undefined") {
    conditions.push("decision_type_ID = ?");
    values.push(decisionType);
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
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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
  var { byCaseType, minYear, maxYear, decisionType, memberState,
    directorateGeneral, caseType, network, limit, offset, download } = parameters.query;

  if (typeof limit === "undefined") {
    limit = 100;
   }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

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
  if (typeof decisionType !== "undefined") {
    conditions.push("decision_type_ID = ?");
    values.push(decisionType);
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
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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
model.awards = function(parameters, queryResult) {

  // get filter values
  var { minYear, maxYear, caseNumber, memberState, beneficiaryType,
    sector, aidInstrument, limit, offset, download } = parameters.query;

  if (typeof limit === "undefined") {
    limit = 100;
   }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  // choose a table
  var table = "awards"

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("notification_year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("notification_year <= ?");
    values.push(maxYear);
  }
  if (typeof caseNumber !== "undefined") {
    conditions.push("case_number = ?");
    values.push(caseNumber);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }
  if (typeof beneficiaryType !== "undefined") {
    conditions.push("beneficiary_type_ID = ?");
    values.push(beneficiaryType);
  }
  if (typeof sector !== "undefined") {
    conditions.push("NACE_sector_ID = ?");
    values.push(sector);
  }
  if (typeof aidInstrument !== "undefined") {
    conditions.push("aid_instrument_ID = ?");
    values.push(aidInstrument);
  }

  // construct the conditions for the SQL query
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  // construct SQL query
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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
model.awardsCSTS = function(parameters, queryResult) {

  // get filter values
  var { minYear, maxYear, memberState, byBeneficiary, byInstrument, bySector,
  beneficiaryType, sector, aidInstrument, limit, offset, download } = parameters.query;

  // make empty arrays for conditions and values
  var conditions = [];
  var values = [];

  if (typeof limit === "undefined") {
    limit = 100;
   }

  if (typeof offset === "undefined") {
    offset = 0;
  }

  if(limit > 100) {
    limit = 100;
  }

  // choose a table
  var table = "awards_CSTS"
  if (byBeneficiary === "1") {
    table = "awards_CSTS_B";
  }
  else if (byInstrument === "1") {
    table = "awards_CSTS_I";
  }
  else if (bySector === "1") {
    table = "awards_CSTS_S";
  }

  // make an array of conditions and values
  if (typeof minYear !== "undefined") {
    conditions.push("notification_year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("notification_year <= ?");
    values.push(maxYear);
  }
  if (typeof memberState !== "undefined") {
    conditions.push("member_state_ID = ?");
    values.push(memberState);
  }

  if (byBeneficiary === "1") {
    if (typeof beneficiaryType !== "undefined") {
      conditions.push("beneficiary_type_ID = ?");
      values.push(beneficiaryType);
    }
  }
  if (bySector === "1") {
    if (typeof sector !== "undefined") {
      conditions.push("NACE_sector_ID = ?");
      values.push(sector);
    }
  }
  if (byInstrument === "1") {
    if (typeof aidInstrument !== "undefined") {
      conditions.push("aid_instrument_ID = ?");
      values.push(byInstrument);
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
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

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

module.exports = model;
