const model = require.main.require("./eutr-module/eutr-model.js");
const controllerHandler = require.main.require("./utilities/controller-handler.js");

const controller = {};

controller.datasets = function (req, res) {
  controllerHandler (req, res, model.datasets);
};

controller.notifications = function (req, res) {
  controllerHandler (req, res, model.notifications);
};

controller.notifications_ts = function (req, res) {
  controllerHandler (req, res, model.notifications_ts);
};

controller.notifications_csts = function (req, res) {
  controllerHandler (req, res, model.notifications_csts);
};

controller.comments = function (req, res) {
  controllerHandler (req, res, model.comments);
};

controller.comments_ts = function (req, res) {
  controllerHandler (req, res, model.comments_ts);
};

controller.comments_csts_n = function (req, res) {
  controllerHandler (req, res, model.comments_csts_n);
};

controller.comments_csts_s = function (req, res) {
  controllerHandler (req, res, model.comments_csts_s);
};

controller.comments_ddy = function (req, res) {
  controllerHandler (req, res, model.comments_ddy);
};

controller.comments_net = function (req, res) {
  controllerHandler (req, res, model.comments_net);
};

controller.opinions = function (req, res) {
  controllerHandler (req, res, model.opinions);
};

controller.opinions_ts = function (req, res) {
  controllerHandler (req, res, model.opinions_ts);
};

controller.opinions_csts_n = function (req, res) {
  controllerHandler (req, res, model.opinions_csts_n);
};

controller.opinions_csts_s = function (req, res) {
  controllerHandler (req, res, model.opinions_csts_s);
};

controller.opinions_ddy = function (req, res) {
  controllerHandler (req, res, model.opinions_ddy);
};

controller.opinions_net = function (req, res) {
  controllerHandler (req, res, model.opinions_net);
};

controller.codebook = function (req, res) {
  controllerHandler (req, res, model.codebook);
};

controller.notification_by_id = function (req, res) {
  controllerHandler (req, res, model.notification_by_id);
};

controller.comment_by_id = function (req, res) {
  controllerHandler (req, res, model.comment_by_id);
};

controller.opinion_by_id = function (req, res) {
  controllerHandler (req, res, model.opinion_by_id);
};

module.exports = controller;
