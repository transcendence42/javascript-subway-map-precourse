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
        let stationsExceptRouteStations = allStations.filter(item => {
          return !routeStations.includes(item);
        });
        this.sectionManageView.showManageSection(
          routeName,
          routeStations,
          stationsExceptRouteStations
        );
      }
    });
  }
}
