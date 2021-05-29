import LineDAO from "./lineDAO.js";

export default class StationDAO {
  constructor() {
    this.localStorage = window.localStorage;
  }
  getAllStations() {
    if (!this.localStorage.getItem("stations")) return [];
    return this.localStorage.getItem("stations").split(",");
  }
  addStation(stationName) {
    let stations = this.getAllStations();
    if (stations.indexOf(stationName) != -1) return null;
    stations.push(stationName);
    this.localStorage.setItem("stations", stations.toString());
    return stationName;
  }
  isStationInRoute(stationName) {
    let lineDAO = new LineDAO();
    let routes = lineDAO.getAllRoutes();
    let routeArray = Object.keys(routes);
    let ret = false;
    routeArray.forEach(route => {
      if (routes[route].includes(stationName)) ret = true;
    });
    return ret;
  }
  deleteStation(stationName) {
    let stations = this.getAllStations();
    if (this.isStationInRoute(stationName)) return null;
    stations = stations.filter(item => item != stationName);
    this.localStorage.setItem("stations", stations.toString());
    return stationName;
  }
}
