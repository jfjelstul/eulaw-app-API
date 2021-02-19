
const mysql = require("mysql");
const dbConfig = require.main.require("./EUSA-module/config/EUSA-config.js")

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
    console.log("Successfully connected to the database.");
  }
});

module.exports = databaseConnection;
