
const databaseConnection = require.main.require("./EUTR-module/connection/EUTR-database-connection.js");

const downloadResource = require.main.require("./utilities/download.js");

const model = {};

const defaultLimit = 1000;

model.notifications = function(parameters, callback) {

  var { notificationId, notificationBy, minStartDate, maxStartDate,
    minComments, maxComments, minOpinions, maxOpinions,
    commissionComment, commissionOpinion,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "notifications";

  if (typeof notificationId !== "undefined") {
    conditions.push("notification_ID = ?");
    values.push(notificationId);
  }
  if (typeof notificationBy !== "undefined") {
    conditions.push("notification_by_ID = ?");
    values.push(notificationBy);
  }
  if (typeof minStartDate !== "undefined") {
    conditions.push("start_date >= ?");
    values.push(startDate);
  }
  if (typeof maxStartDate !== "undefined") {
    conditions.push("start_date <= ?");
    values.push(endDate);
  }
  if (typeof minComments !== "undefined") {
    conditions.push("count_comments >= ?");
    values.push(endDate);
  }
  if (typeof maxComments !== "undefined") {
    conditions.push("count_comments <= ?");
    values.push(endDate);
  }
  if (typeof minOpinions !== "undefined") {
    conditions.push("count_opinions >= ?");
    values.push(minOpinions);
  }
  if (typeof maxOpinions !== "undefined") {
    conditions.push("count_opinions <= ?");
    values.push(maxOpinions);
  }
  if (typeof commissionComment !== "undefined") {
    conditions.push("commission_comment = ?");
    values.push(commissionComment);
  }
  if (typeof commissionOpinion !== "undefined") {
    conditions.push("commission_opinion = ?");
    values.push(commissionOpinion);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.notifications_TS = function(parameters, callback) {

  var { minYear, maxYear, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "notifications_TS";

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.notifications_CSTS = function(parameters, callback) {

  var { minYear, maxYear, notificationBy, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  var table = "notifications_CSTS";

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof notificationBy !== "undefined") {
    conditions.push("notification_by_ID <= ?");
    values.push(notificationBy);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.comments = function(parameters, callback) {

  var { notificationId, minStartDate, maxStartDate, commentId, commentBy,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "comments";

  if (typeof notificationId !== "undefined") {
    conditions.push("notification_ID = ?");
    values.push(notificationId);
  }
  if (typeof minStartDate !== "undefined") {
    conditions.push("start_date >= ?");
    values.push(minStartDate);
  }
  if (typeof maxStartDate !== "undefined") {
    conditions.push("start_date <= ?");
    values.push(maxStartDate);
  }
  if (typeof commentId !== "undefined") {
    conditions.push("comment_ID = ?");
    values.push(commentId);
  }
  if (typeof commentBy !== "undefined") {
    conditions.push("comment_by_ID <= ?");
    values.push(commentBy);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.comments_TS = function(parameters, callback) {

  var { minYear, maxYear, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "comments_TS";

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.comments_CSTS = function(parameters, callback) {

  var { minYear, maxYear, commentBy, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "comments_CSTS";

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof commentBy !== "undefined") {
    conditions.push("comment_by_ID = ?");
    values.push(commentBy);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.comments_DDY = function(parameters, callback) {

  var { minYear, maxYear, commentBy, notificationBy, network, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "comments_DDY";
  if(network == "1") {
    table = "comments_network";
  }

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof commentBy !== "undefined") {
    conditions.push("comment_by_ID = ?");
    values.push(commentBy);
  }
  if (typeof notificationBy !== "undefined") {
    conditions.push("notification_by_ID = ?");
    values.push(notificationBy);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.opinions = function(parameters, callback) {

  var { notificationId, minStartDate, maxStartDate, opinionId, opinionBy,
    limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "opinions";

  if (typeof notificationId !== "undefined") {
    conditions.push("notification_ID = ?");
    values.push(notificationId);
  }
  if (typeof minStartDate !== "undefined") {
    conditions.push("start_date >= ?");
    values.push(minStartDate);
  }
  if (typeof maxStartDate !== "undefined") {
    conditions.push("start_date <= ?");
    values.push(maxStartDate);
  }
  if (typeof opinionId !== "undefined") {
    conditions.push("opinion_ID = ?");
    values.push(opinionId);
  }
  if (typeof opinionBy !== "undefined") {
    conditions.push("opinion_by_ID <= ?");
    values.push(opinionBy);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.opinions_TS = function(parameters, callback) {

  var { minYear, maxYear, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "opinions_TS";

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.opinions_CSTS = function(parameters, callback) {

  var { minYear, maxYear, opinionBy, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "opinions_CSTS";

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof opinionBy !== "undefined") {
    conditions.push("opinion_by_ID = ?");
    values.push(opinionBy);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.opinions_DDY = function(parameters, callback) {

  var { minYear, maxYear, opinionBy, notificationBy, network, limit, offset, download } = parameters.query;

  var conditions = [];
  var values = [];

  if (typeof limit == "undefined") {
    limit = defaultLimit;
  }

  if(limit > defaultLimit) {
    limit = defaultLimit;
  }

  if (typeof offset == "undefined") {
    offset = 0;
  }

  var table = "opinions_DDY";
  if(network == "1") {
    table = "opinions_network";
  }

  if (typeof minYear !== "undefined") {
    conditions.push("year >= ?");
    values.push(minYear);
  }
  if (typeof maxYear !== "undefined") {
    conditions.push("year <= ?");
    values.push(maxYear);
  }
  if (typeof opinionBy !== "undefined") {
    conditions.push("opinion_by_ID = ?");
    values.push(opinionBy);
  }
  if (typeof notificationBy !== "undefined") {
    conditions.push("notification_by_ID = ?");
    values.push(notificationBy);
  }

  if (conditions.length > 0) {
    var conditions = " WHERE " + conditions.join(" AND ");
  } else {
    var conditions = "";
    var values = null;
  }

  var sql = "SELECT * FROM " + table + conditions + " LIMIT " + limit + " OFFSET " + offset;

  databaseConnection.query (sql, values, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

model.entity_codes = function(parameters, callback) {
  var { download } = parameters.query;
  var sql = "SELECT * FROM entity_codes";
  databaseConnection.query (sql, null, function(error, json) {
    if (error) {
      callback("error", error);
    } else {
      if(download == "1") {
        const csv = downloadResource(json);
        callback("csv", csv);
      } else {
        callback("json", json);
      }
    }
  });
};

module.exports = model;
