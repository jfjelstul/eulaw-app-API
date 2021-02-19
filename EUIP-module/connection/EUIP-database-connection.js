const mysql = require("mysql");
const dbConfig = require.main.require("./EUIP-module/config/EUIP-config.js")

// create a connection to the database
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

// open connection
databaseConnection.connect(err => {
  if (err) {
    throw err;
  } else {
    console.log("Successfully connected to the database.");
  }
});

// alternative syntax:
// databaseConnection.connect(function(err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Successfully connected to the database.");
//   }
// });

// export the MariaDB databse connection
module.exports = databaseConnection;
