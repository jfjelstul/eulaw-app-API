const mysql = require("mysql");
const dbConfig = require.main.require("./eusa-module/eusa-config.js")

const databaseConnection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
  typeCast: function (field, next) {
    if (field.type === "DATE") {
      return field.string();
    } else {
      return next();
    }
  }
});

databaseConnection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log("connected to the eusa database");
  }
});

module.exports = databaseConnection;
