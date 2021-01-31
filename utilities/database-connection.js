
const mysql = require("mysql");
const config = require.main.require("./config/config.js")

const databaseConnection = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DATABASE,
  typeCast: function (field, next) {
    if (field.type === "DATE") {
      return field.string();
    } else {
      return next();
    }
  }
});

databaseConnection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("Successfully connected to the database.");
  }
});

module.exports = databaseConnection;
