import SectionManageView from "../view/sectionManageView.js";
import RouteDAO from "../model/routeDAO.js";
import StationDAO from "../model/stationDAO.js";

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
        if (document.querySelectorAll("tr").length <= 3) {
          alert("더 이상 지울 수 없습니다.");
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
        this.routeDAO.addStationInRoute(routeName, stationName, idx);
        /* TODO: delete station name from select */
        /* TODO: increase num input */
        /* TODO: add tr */
      });
  }
}
