
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

controller.notifications_TS = function (req, res) {
  model.notifications_TS (req, function(type, data) {
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

controller.notifications_CSTS = function (req, res) {
  model.notifications_CSTS (req, function(type, data) {
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

controller.comments_TS = function (req, res) {
  model.comments_TS (req, function(type, data) {
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

controller.comments_CSTS = function (req, res) {
  model.comments_CSTS (req, function(type, data) {
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

controller.comments_DDY = function (req, res) {
  model.comments_DDY (req, function(type, data) {
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

controller.opinions_TS = function (req, res) {
  model.opinions_TS (req, function(type, data) {
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

controller.opinions_CSTS = function (req, res) {
  model.opinions_CSTS (req, function(type, data) {
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

controller.opinions_DDY = function (req, res) {
  model.opinions_DDY (req, function(type, data) {
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

controller.entity_codes = function (req, res) {
  model.entity_codes (req, function(type, data) {
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
