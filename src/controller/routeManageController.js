import RouteManageView from "../view/routeManageView.js";
import RouteDAO from "../model/routeDAO.js";

export default class RouteManageController {
  constructor() {
    this.routeManageView = new RouteManageView();
    this.routeDAO = new RouteDAO();
    this.addEventAboutShowAllRoutes();
  }
  addEventAboutShowAllRoutes() {
    document
      .querySelector("#line-manager-button")
      .addEventListener("click", () => {
        this.routeManageView.showAllRoutes();
        this.addEventAboutAddRoute();
      });
  }
  addEventAboutAddRoute() {
    document.querySelector("#add-route").addEventListener("click", () => {
      let routeName = document.querySelector("#route-name").value;
      let upwardEndStation = document.querySelector("[name=upward-end-station]")
        .value;
      let downwardEndStation = document.querySelector(
        "[name=downward-end-station]"
      ).value;
      console.log(this.routeDAO.getAllRoutes());
      //console.log(routeName, upwardEndStation, downwardEndStation);
    });
  }
}
