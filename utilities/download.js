const { Parser } = require("json2csv");

module.exports = data => {
  const parser = new Parser();
  const csv = parser.parse(data);
  return csv;
};
