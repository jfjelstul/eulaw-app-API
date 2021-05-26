
module.exports = (table, value, label, connection, callback) => {

  // create the SQL query
  var sql = "SELECT DISTINCT " + value + " AS value, " + label + " AS label FROM " + table + " WHERE " + value + " IS NOT null ORDER BY " + value;

  // query the database
  connection.query(sql, function(error, results) {

    // if there is an error, pass the error to the callback function
    if (error) {
      callback("error", error);

    // if there is not an error, handle the data
    } else {

      // pass the json results into the callback function
      callback("json", results);
    }
  });
}
