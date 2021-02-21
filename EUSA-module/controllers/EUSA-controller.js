
const model = require.main.require('./EUSA-module/models/EUSA-model.js');

const controller = {};

controller.cases = function (req, res) {
  model.cases (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.cases_TS = function (req, res) {
  model.cases_TS (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.cases_CSTS_MS = function (req, res) {
  model.cases_CSTS_MS (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.cases_CSTS_DG = function (req, res) {
  model.cases_CSTS_DG (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.cases_DDY = function (req, res) {
  model.cases_DDY (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.decisions = function (req, res) {
  model.decisions (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.decisions_TS = function (req, res) {
  model.decisions_TS (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.decisions_CSTS_MS = function (req, res) {
  model.decisions_CSTS_MS (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.decisions_CSTS_DG = function (req, res) {
  model.decisions_CSTS_DG (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.decisions_DDY = function (req, res) {
  model.decisions_DDY (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.awards = function (req, res) {
  model.awards (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

controller.awards_CSTS = function (req, res) {
  model.awards_CSTS (req, function(type, data) {
    if(type == 'csv') {
      res.setHeader('Content-disposition', 'attachment; filename=data.csv');
      res.set('Content-Type', 'text/csv');
      res.attachment('data.csv');
      res.status(200).send(data);
    } else if (type == 'json') {
      res.status(200).send(data);
    } else if (type == 'error') {
      res.status(500).send({
        message: 'error retrieving data'
      });
    }
  });
};

module.exports = controller;
