const controller = require.main.require("./ecio-module/ecio-controller.js");

module.exports = app => {

  app.get("/databases/ECIO", controller.datasets);

  app.get("/databases/ECIO/commissions", controller.commissions);
  app.get("/databases/ECIO/departments", controller.departments);
  app.get("/databases/ECIO/departments/commission", controller.departments_by_commission);
  app.get("/databases/ECIO/commissioners", controller.commissioners);
  app.get("/databases/ECIO/commissioners/commission", controller.commissioners_by_commission);
  app.get("/databases/ECIO/policy-areas", controller.policy_areas);
  app.get("/databases/ECIO/allocations/portfolio", controller.portfolio_allocations);
  app.get("/databases/ECIO/allocations/department", controller.department_allocations);
  app.get("/databases/ECIO/allocations/policy-area", controller.policy_area_allocations);
  app.get("/databases/ECIO/histories/department", controller.department_histories);
  app.get("/databases/ECIO/histories/policy-area", controller.policy_area_histories);

  app.get("/databases/ECIO/variables", controller.variables);
  app.get("/databases/ECIO/datasets", controller.datasets);

  app.get("/ID-numbers/ECIO/commission", controller.commission_id);
  app.get("/ID-numbers/ECIO/commissioner", controller.commissioner_id);
  app.get("/ID-numbers/ECIO/member-state", controller.member_state_id);
  app.get("/ID-numbers/ECIO/department", controller.department_id);
  app.get("/ID-numbers/ECIO/department-type", controller.department_type_id);
  app.get("/ID-numbers/ECIO/current-department", controller.current_department_id);
  app.get("/ID-numbers/ECIO/current-department-type", controller.current_department_type_id);
  app.get("/ID-numbers/ECIO/policy-area", controller.policy_area_id);
};
