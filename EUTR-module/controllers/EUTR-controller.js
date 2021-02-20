
const model = require.main.require("./EUTR-module/models/EUTR-model.js");

const controller = {};

controller.notifications = function (req, res) {
  model.notifications (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.notificationsTS = function (req, res) {
  model.notificationsTS (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.notificationsCSTS = function (req, res) {
  model.notificationsCSTS (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.comments = function (req, res) {
  model.comments (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.commentsTS = function (req, res) {
  model.commentsTS (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.commentsCSTS = function (req, res) {
  model.commentsCSTS (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.commentsDDY = function (req, res) {
  model.commentsDDY (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.opinions = function (req, res) {
  model.opinions (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.opinionsTS = function (req, res) {
  model.opinionsTS (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.opinionsCSTS = function (req, res) {
  model.opinionsCSTS (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.opinionsDDY = function (req, res) {
  model.opinionsDDY (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

controller.entityCodes = function (req, res) {
  model.entityCodes (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "error retrieving data"
      });
    }
  });
};

module.exports = controller;
