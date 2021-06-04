const connection = require.main.require("./eutr-module/eutr-connection.js");
const modelHandler = require.main.require("./utilities/model-handler.js");
const modelHandlerValues = require.main.require("./utilities/model-handler-values.js");
const { equalTo, greaterThan, lessThan } = require.main.require("./utilities/conditions.js")

const model = {};

model.datasets = function(parameters, callback) {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("datasets", conditions, parameters, connection, callback);
};

model.variables = function(parameters, callback) {
  var { dataset } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "dataset", dataset);
  modelHandler("variables", conditions, parameters, connection, callback);
};

model.notifications = function(parameters, callback) {
  var { notification_id, notification_by_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "notification_id", notification_id);
  conditions = equalTo(conditions, "notification_by_ids", notification_by_ids);
  modelHandler("notifications", conditions, parameters, connection, callback);
};

model.notifications_ts = function(parameters, callback) {
  var { year_min, year_max } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  modelHandler("notifications_ts", conditions, parameters, connection, callback);
};

model.notifications_csts = function(parameters, callback) {
  var { year_min, year_max, notification_by_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "notification_by_id", notification_by_id);
  modelHandler("notifications_csts", conditions, parameters, connection, callback);
};

model.comments = function(parameters, callback) {
  var { notification_id, notification_by_id, comment_id, comment_by_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "notification_id", notification_id);
  conditions = equalTo(conditions, "notification_by_id", notification_by_id);
  conditions = equalTo(conditions, "comment_id", comment_id);
  conditions = equalTo(conditions, "comment_by_id", comment_by_id);
  modelHandler("comments", conditions, parameters, connection, callback);
};

model.comments_ts = function(parameters, callback) {
  var { year_min, year_max } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  modelHandler("comments_ts", conditions, parameters, connection, callback);
};

model.comments_csts_n = function(parameters, callback) {
  var { year_min, year_max, notification_by_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "notification_by_id", notification_by_id);
  modelHandler("comments_csts_n", conditions, parameters, connection, callback);
};

model.comments_csts_s = function(parameters, callback) {
  var { year_min, year_max, comment_by_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "comment_by_id", comment_by_id);
  modelHandler("comments_csts_s", conditions, parameters, connection, callback);
};

model.comments_ddy = function(parameters, callback) {
  var { year_min, year_max, comment_by_id, notification_by_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "comment_by_id", comment_by_id);
  conditions = equalTo(conditions, "notification_by_id", notification_by_id);
  modelHandler("comments_ddy", conditions, parameters, connection, callback);
};

model.comments_net = function(parameters, callback) {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("comments_net", conditions, parameters, connection, callback);
};

model.opinions = function(parameters, callback) {
  var { nofication_id, notification_by_id, opinion_id, opinion_by_id } = parameters.query;
  var conditions = [];
  conditions = equalTo(conditions, "nofication_id", nofication_id);
  conditions = equalTo(conditions, "notification_by_id", notification_by_id);
  conditions = equalTo(conditions, "opinion_id", opinion_id);
  conditions = equalTo(conditions, "opinion_by_id", opinion_by_id);
  modelHandler("opinions", conditions, parameters, connection, callback);
};

model.opinions_ts = function(parameters, callback) {
  var { year_min, year_max } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  modelHandler("opinions_ts", conditions, parameters, connection, callback);
};

model.opinions_csts_n = function(parameters, callback) {
  var { year_min, year_max, notification_by_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "notification_by_id", notification_by_id);
  modelHandler("opinions_csts_n", conditions, parameters, connection, callback);
};

model.opinions_csts_s = function(parameters, callback) {
  var { year_min, year_max, opinion_by_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "opinion_by_id", opinion_by_id);
  modelHandler("opinions_csts_s", conditions, parameters, connection, callback);
};

model.opinions_ddy = function(parameters, callback) {
  var { year_min, year_max, opinion_by_id, notification_by_id } = parameters.query;
  var conditions = [];
  conditions = greaterThan(conditions, "year", year_min);
  conditions = lessThan(conditions, "year", year_max);
  conditions = equalTo(conditions, "opinion_by_id", opinion_by_id);
  conditions = equalTo(conditions, "notification_by_id", notification_by_id);
  modelHandler("opinions_ddy", conditions, parameters, connection, callback);
};

model.opinions_net = function(parameters, callback) {
  var { } = parameters.query;
  var conditions = [];
  modelHandler("opinions_net", conditions, parameters, connection, callback);
};

model.notification_by_id = (parameters, callback) => {
  modelHandlerValues("notifications_csts", "notification_by_id", "notification_by", connection, callback);
}

model.comment_by_id = (parameters, callback) => {
  modelHandlerValues("comments_csts_s", "comment_by_id", "comment_by", connection, callback);
}

model.opinion_by_id = (parameters, callback) => {
  modelHandlerValues("opinions_csts_s", "opinion_by_id", "opinion_by", connection, callback);
}

module.exports = model;
