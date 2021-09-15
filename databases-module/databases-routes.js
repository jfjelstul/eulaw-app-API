const controller = require.main.require("./databases-module/databases-controller.js");

module.exports = app => {
  app.get("/databases", controller.databases);
};
