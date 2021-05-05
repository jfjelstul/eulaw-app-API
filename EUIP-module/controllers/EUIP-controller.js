const model = require.main.require("./EUIP-module/models/EUIP-model.js");
const controllerHandler = require.main.require("./utilities/controller-handler.js");

const controller = {};

controller.cases = function (req, res) {
  controllerHandler (req, res, model.cases);
};

controller.cases_TS = function (req, res) {
  controllerHandler (req, res, model.cases_TS);
};

controller.cases_CSTS_MS = function (req, res) {
  controllerHandler (req, res, model.cases_CSTS_MS);
};

controller.cases_CSTS_DG = function (req, res) {
  controllerHandler (req, res, model.cases_CSTS_DG);
};

controller.cases_DDY = function (req, res) {
  controllerHandler (req, res, model.cases_DDY);
};

controller.decisions = function (req, res) {
  controllerHandler (req, res, model.decisions);
};

controller.decisions_TS = function (req, res) {
  controllerHandler (req, res, model.decisions_TS);
};

controller.decisions_CSTS_MS = function (req, res) {
  controllerHandler (req, res, model.decisions_CSTS_MS);
};

controller.decisions_CSTS_DG = function (req, res) {
  controllerHandler (req, res, model.decisions_CSTS_DG);
};

controller.decisions_DDY = function (req, res) {
  controllerHandler (req, res, model.decisions_DDY);
};

controller.codebook = function (req, res) {
  controllerHandler (req, res, model.codebook);
};

controller.codebook_API = function (req, res) {
  controllerHandler (req, res, model.codebook_API);
};

module.exports = controller;
