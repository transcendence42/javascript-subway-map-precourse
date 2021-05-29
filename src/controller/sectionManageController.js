import SectionManageView from "../view/sectionManageView.js";
import RouteDAO from "../model/routeDAO.js";
import StationDAO from "../model/stationDAO.js";
import { ERROR_CODE, ERROR_CODE_MSG } from "./sectionManageControllerError.js";

export default class SectionManageController {
  constructor() {
    this.routeDAO = new RouteDAO();
    this.sectionManageView = new SectionManageView();
    this.addEventAboutShowSectionPage();
  }
  addEventAboutShowSectionPage() {
    document
      .querySelector("#section-manager-button")
      .addEventListener("click", () => {
        let routes = this.routeDAO.getAllRoutes();
        let routeList = Object.keys(routes);
        this.sectionManageView.showAllRoutes(routeList);
        this.addEventAboutRouteButtons();
      });
  }
  addEventAboutRouteButtons() {
    document.querySelector("ul.section-page").addEventListener("click", evt => {
      if (evt.target.className == "section-route-btn") {
        let stationDAO = new StationDAO();
        let allStations = stationDAO.getAllStations();
        let routeName = evt.target.innerText;
        let routeStations = this.routeDAO.getStationsList(routeName);
        this.sectionManageView.showManageSection(
          routeName,
          routeStations,
          allStations
        );
        this.addEventAboutRegisterButton(routeName);
        this.addEventAboutDeleteButtons(routeName);
      }
    });
  }
  addEventAboutDeleteButtons(routeName) {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "delete-route-station") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        if (document.querySelectorAll("tr").length <= 3) {
          alert(ERROR_CODE_MSG[ERROR_CODE.LESS_THAN_TWO]);
          return;
        }
        let tr = evt.target.parentElement.parentElement;
        let stationName = tr.children[1].innerText;
        this.routeDAO.deleteStationInRoute(routeName, stationName);
        tr.remove();
        this.sectionManageView.changeStationsOrder();
        this.sectionManageView.decreaseMaxNumInInput();
      }
    });
  }
  addEventAboutRegisterButton(routeName) {
    document
      .querySelector("button.register-section-button")
      .addEventListener("click", evt => {
        let stationName =
          evt.target.previousElementSibling.previousElementSibling.value;
        let idx = evt.target.previousElementSibling.value;
        if (
          this.routeDAO.addStationInRoute(routeName, stationName, idx) == null
        ) {
          alert(ERROR_CODE_MSG[ERROR_CODE.ALREADY_EXIST_IN_SECTION]);
          return;
        }
        this.sectionManageView.appendStationToTable(stationName, idx);
        this.sectionManageView.increaseMaxNumInInput();
      });
  }
}
