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
}
