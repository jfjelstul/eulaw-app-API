
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

controller.casesTS = function (req, res) {
  model.casesTS (req, function(type, data) {
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

controller.casesCSTS = function (req, res) {
  model.casesCSTS (req, function(type, data) {
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

controller.casesDDY = function (req, res) {
  model.casesDDY (req, function(type, data) {
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

controller.decisionsTS = function (req, res) {
  model.decisionsTS (req, function(type, data) {
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

controller.decisionsCSTS = function (req, res) {
  model.decisionsCSTS (req, function(type, data) {
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

controller.decisionsDDY = function (req, res) {
  model.decisionsDDY (req, function(type, data) {
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

controller.awardsCSTS = function (req, res) {
  model.awardsCSTS (req, function(type, data) {
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
