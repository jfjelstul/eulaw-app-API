
module.exports = (req, res, modelMethod) => {
  modelMethod (req, function(type, data) {
    if(type == "csv") {
      res.setHeader("Content-disposition", "attachment; filename=data.csv");
      res.set("Content-Type", "text/csv");
      res.attachment("data.csv");
      res.status(200).send(data);
    } else if (type == "json") {
      res.status(200).send(data);
    } else if (type == "error") {
      res.status(500).send({
        message: "internal server error"
      });
    }
  });
}
