const controller = require.main.require("./evoeu-module/evoeu-controller.js");

module.exports = app => {

  app.get("/databases/EvoEU", controller.datasets);

  app.get("/databases/EvoEU/nodes", controller.nodes);
  app.get("/databases/EvoEU/edges", controller.edges);

  app.get("/databases/EvoEU/variables", controller.variables);
  app.get("/databases/EvoEU/datasets", controller.datasets);

  app.get("/ID-numbers/EvoEU/node-type", controller.node_type_id);
  app.get("/ID-numbers/EvoEU/incoming-node-type", controller.incoming_node_type_id);
  app.get("/ID-numbers/EvoEU/outgoing-node-type", controller.outgoing_node_type_id);
  app.get("/ID-numbers/EvoEU/edge-type", controller.edge_type_id);
};
