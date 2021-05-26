
const output = {}

output.equalTo = (conditions, variable, value) => {
  if (value !== undefined) {
    var condition = null;
    if (value.includes(" ")) {
      condition = variable + " IN (" + value.split(" ").join(", ") + ")";
      conditions.push();
      console.log("multiple")
    } else {
      condition = variable + "=" + "\"" + value + "\"";
      console.log("single")
    }
    console.log(condition);
    conditions.push(condition);
  }
  return conditions;
}

output.greaterThan = (conditions, variable, value) => {
  if (value !== undefined) {
    conditions.push(variable + ">=" + "\"" + value + "\"");
  }
  return conditions;
}

output.lessThan = (conditions, variable, value) => {
  if (value !== undefined) {
    conditions.push(variable + "<=" + "\"" + value + "\"");
  }
  return conditions;
}

module.exports = output;
