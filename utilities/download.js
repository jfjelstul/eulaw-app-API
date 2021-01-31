const parser = require("json2csv");

module.exports = data => {
  const csv = parser.parse(data);
  return csv;
};
