import RouteManageView from "../view/routeManageView.js";

export default class RouteManageController {
  constructor() {
    this.routeManageView = new RouteManageView();
    this.addEventAboutShowAllRoutes();
  }
  addEventAboutShowAllRoutes() {
    document
      .querySelector("#line-manager-button")
      .addEventListener("click", () => this.routeManageView.showAllRoutes());
  }
}
