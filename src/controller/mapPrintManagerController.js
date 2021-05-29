import LineDAO from "../model/lineDAO.js";
import MapView from "../view/mapPrintManagerView.js";

export default class MapPrintManagerController {
  constructor() {
    this.lineDAO = new LineDAO();
    this.mapView = new MapView();
    this.addEventAboutShowMap();
  }
  addEventAboutShowMap() {
    document
      .querySelector("#map-print-manager-button")
      .addEventListener("click", () => this.showMap());
  }
  showMap() {
    let routes = this.lineDAO.getAllRoutes();
    this.mapView.showMap(routes);
  }
}
