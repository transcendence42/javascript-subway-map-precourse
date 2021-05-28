import RouteManageView from "../view/routeManageView.js";
import StationDAO from "../model/stationDAO.js";

export default class RouteManageController {
  constructor() {
    this.routeManageView = new RouteManageView();
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
      console.log(routeName, upwardEndStation, downwardEndStation);
    });
  }
}
