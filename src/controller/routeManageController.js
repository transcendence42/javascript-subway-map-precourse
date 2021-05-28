import RouteManageView from "../view/routeManageView.js";
import StationDAO from "../model/stationDAO.js";
import RouteDAO from "../model/routeDAO.js";

export default class RouteManageController {
  constructor() {
    this.routeManageView = new RouteManageView();
    this.routeDAO = new RouteDAO();
    this.stationDAO = new StationDAO();
    this.addEventAboutShowAllRoutes();
  }
  addEventAboutShowAllRoutes() {
    document
      .querySelector("#line-manager-button")
      .addEventListener("click", () => {
        let stations = this.stationDAO.getAllStations();
        this.routeManageView.showAllRoutes(
          stations,
          this.routeDAO.getAllRoutes()
        );
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
      /* TODO: validate */
      this.appendRouteToTable(
        this.routeDAO.addRoute(routeName, upwardEndStation, downwardEndStation)
      );
    });
  }
  appendRouteToTable(routeName) {
    if (routeName == null || routeName == "") {
      alert("노선 이름이 잘못되었습니다.");
    } else {
      let route = this.routeDAO.getAllRoutes();
      let upwardEndStation = route[routeName][0];
      let downwardEndStation = route[routeName][1];
      this.routeManageView.addRouteToTable(
        routeName,
        upwardEndStation,
        downwardEndStation
      );
    }
  }
}
