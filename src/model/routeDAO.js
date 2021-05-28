export default class RouteDAO {
  constructor() {
    this.localStorage = window.localStorage;
  }
  getAllRoutes() {
    if (!this.localStorage.getItem("routes")) return {};
    return JSON.parse(this.localStorage.getItem("routes"));
  }
}
