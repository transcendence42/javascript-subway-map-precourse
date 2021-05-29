import LineManageView from "../view/lineManageView.js";
import StationDAO from "../model/stationDAO.js";
import LineDAO from "../model/lineDAO.js";
import { ERROR_CODE, ERROR_CODE_MSG } from "./lineManagerControllerError.js";

export default class LineManagerController {
  constructor() {
    this.lineManageView = new LineManageView();
    this.lineDAO = new LineDAO();
    this.stationDAO = new StationDAO();
    this.addEventAboutShowAllRoutes();
  }
  addEventAboutShowAllRoutes() {
    document
      .querySelector("#line-manager-button")
      .addEventListener("click", () => {
        let stations = this.stationDAO.getAllStations();
        this.lineManageView.showAllRoutes(
          stations,
          this.lineDAO.getAllRoutes()
        );
        this.addEventAboutAddRoute();
        this.addEventAboutDeleteRoute();
      });
  }
  addEventAboutDeleteRoute() {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "line-delete-button") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        let tr = evt.target.parentElement.parentElement;
        let routeName = tr.firstElementChild.innerText;
        this.lineDAO.deleteRoute(routeName);
        tr.remove();
      }
    });
  }
  addEventAboutAddRoute() {
    document.querySelector("#line-add-button").addEventListener("click", () => {
      let routeName = document.querySelector("#line-name-input").value;
      let lineStartStation = document.querySelector(
        "#line-start-station-selector"
      ).value;
      let lineEndStation = document.querySelector("#line-end-station-selector")
        .value;
      let errCode = this.isValidForAddingRoute(
        routeName,
        lineStartStation,
        lineEndStation
      );
      if (errCode != ERROR_CODE.SUCCESS) {
        alert(ERROR_CODE_MSG[errCode]);
        return;
      }
      this.appendRouteToTable(
        this.lineDAO.addRoute(routeName, lineStartStation, lineEndStation)
      );
    });
  }
  isValidForAddingRoute(routeName, lineStartStation, lineEndStation) {
    if (routeName == null || routeName == "")
      return ERROR_CODE.EMPTY_ROUTE_NAME;
    if (routeName.search(/[^가-힣0-9]/g) != -1)
      return ERROR_CODE.WRONG_ROUTE_NAME;
    if (lineStartStation == lineEndStation)
      return ERROR_CODE.EQUAL_UPWARD_AND_DOWNWARD;
    return ERROR_CODE.SUCCESS;
  }
  appendRouteToTable(routeName) {
    if (routeName == null) {
      alert(ERROR_CODE_MSG[ERROR_CODE.ROUTE_NAME_DUP]);
    } else {
      let route = this.lineDAO.getAllRoutes();
      let stationsList = route[routeName];
      let lineStartStation = stationsList[0];
      let lineEndStation = stationsList[stationsList.length - 1];
      this.lineManageView.addRouteToTable(
        routeName,
        lineStartStation,
        lineEndStation
      );
    }
  }
}
