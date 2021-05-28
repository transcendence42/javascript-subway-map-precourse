import SectionManageView from "../view/sectionManageView.js";
import RouteDAO from "../model/routeDAO.js";

export default class SectionManageController {
  constructor() {
    this.sectionManageView = new SectionManageView();
    this.addEventAboutShowSectionPage();
  }
  addEventAboutShowSectionPage() {
    document
      .querySelector("#section-manager-button")
      .addEventListener("click", () => {
        let routeDAO = new RouteDAO();
        let routes = routeDAO.getAllRoutes();
        let routeList = Object.keys(routes);
        this.sectionManageView.showAllRoutes(routeList);
      });
  }
}
