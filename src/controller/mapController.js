import RouteDAO from "../model/routeDAO.js";
import MapView from "../view/mapView.js";

export default class MapController {
  constructor() {
    this.routeDAO = new RouteDAO();
    this.mapView = new MapView();
    this.addEventAboutShowMap();
  }
  addEventAboutShowMap() {
    document
      .querySelector("#map-print-manager-button")
      .addEventListener("click", () => this.showMap());
  }
  showMap() {
    let routes = this.routeDAO.getAllRoutes();
    this.mapView.showMap(routes);
  }
}
