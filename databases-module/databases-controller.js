const model = require.main.require("./databases-module/databases-model.js");
const controllerHandler = require.main.require("./utilities/controller-handler.js");

const controller = {};

controller.databases = function (req, res) {
  controllerHandler (req, res, model.databases);
};

module.exports = controller;
