import RouteManageView from "../view/routeManageView.js";
import StationDAO from "../model/stationDAO.js";
import RouteDAO from "../model/routeDAO.js";
import { ERROR_CODE, ERROR_CODE_MSG } from "./routeManageControllerError.js";

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
        this.addEventAboutDeleteRoute();
      });
  }
  addEventAboutDeleteRoute() {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "deleteRouteBtn") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        let tr = evt.target.parentElement.parentElement;
        let routeName = tr.firstElementChild.innerText;
        this.routeDAO.deleteRoute(routeName);
        tr.remove();
      }
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
      let errCode = this.isValidForAddingRoute(
        routeName,
        upwardEndStation,
        downwardEndStation
      );
      if (errCode != ERROR_CODE.SUCCESS) {
        alert(ERROR_CODE_MSG[errCode]);
        return;
      }
      this.appendRouteToTable(
        this.routeDAO.addRoute(routeName, upwardEndStation, downwardEndStation)
      );
    });
  }
  isValidForAddingRoute(routeName, upwardEndStation, downwardEndStation) {
    if (routeName == null || routeName == "")
      return ERROR_CODE.EMPTY_ROUTE_NAME;
    if (routeName.search(/[^가-힣0-9]/g) != -1)
      return ERROR_CODE.WRONG_ROUTE_NAME;
    if (upwardEndStation == downwardEndStation)
      return ERROR_CODE.EQUAL_UPWARD_AND_DOWNWARD;
    return ERROR_CODE.SUCCESS;
  }
  appendRouteToTable(routeName) {
    if (routeName == null) {
      alert(ERROR_CODE_MSG[ERROR_CODE.ROUTE_NAME_DUP]);
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
