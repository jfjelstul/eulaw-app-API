const downloadResource = require.main.require("./utilities/download.js");

const maxLimit = 10000;

module.exports = (table, conditions, parameters, connection, callback) => {

  // extract parameters that are not specific to the route
  var { limit, offset, download, count, variables } = parameters.query;

  // if the limit is not specified, set it equal to the max limit
  if (typeof limit === "undefined") {
    limit = maxLimit;
  }

  // if the limit exceeds the max limit, set it equal to the max limit
  if(limit > maxLimit) {
    limit = maxLimit;
  }

  // if the offset is not specified, set it equal to zero
  if (typeof offset === "undefined") {
    offset = 0;
  }

  // if there are conditions specified, concatenate them into an SQL fragment
  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  }

  // if no conditions are specified, set to default values
  else {
    var conditions = "";
  }

  // create the SQL query
  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  // if count parameter is specified, override the SQL query
  if (count === "1") {
    sql = "SELECT COUNT(*) as observations FROM " + table + conditions;
  }

  if (variables === "1") {
    sql = "SELECT variable_id, variable FROM codebook WHERE dataset = '" + table + "';";
  }

  // query the database
  connection.query (sql, function(error, results) {

    // if there is an error, pass the error to the callback function
    if (error) {
      callback("error", error);

    // if there is not an error, handle the data
    } else {

      // if the download parameter is specified, parse the json and pass a csv file into the callback function
      if(download === "1") {
        const csv = downloadResource(results);
        callback("csv", csv);

      // otherwise pass the json results into the callback function
      } else {
        callback("json", results);
      }
    }
  });
}
