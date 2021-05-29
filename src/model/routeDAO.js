export default class RouteDAO {
  constructor() {
    this.localStorage = window.localStorage;
  }
  getAllRoutes() {
    if (!this.localStorage.getItem("routes")) return {};
    return JSON.parse(this.localStorage.getItem("routes"));
  }
  addRoute(routeName, upwardEndStation, downwardEndStation) {
    let routes = this.getAllRoutes();
    if (Object.keys(routes).indexOf(routeName) != -1) return null;
    routes[routeName] = [upwardEndStation, downwardEndStation];
    this.localStorage.setItem("routes", JSON.stringify(routes));
    return routeName;
  }
  deleteRoute(routeName) {
    let routes = this.getAllRoutes();
    delete routes[routeName];
    this.localStorage.setItem("routes", JSON.stringify(routes));
  }
  getStationsList(routeName) {
    let routes = this.getAllRoutes();
    let stationsList = routes[routeName];
    if (stationsList == null) {
      alert("잘못된 경로입니다.");
    }
    return stationsList;
  }
  addStationInRoute(routeName, stationName, idx) {
    let routes = this.getAllRoutes();
    if (routes[routeName].includes(stationName)) return null;
    routes[routeName].splice(idx, 0, stationName);
    this.localStorage.setItem("routes", JSON.stringify(routes));
    return stationName;
  }
  deleteStationInRoute(routeName, stationName) {
    let routes = this.getAllRoutes();
    routes[routeName] = routes[routeName].filter(item => {
      return item != stationName;
    });
    this.localStorage.setItem("routes", JSON.stringify(routes));
  }
}
