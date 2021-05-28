export default class RouteManageController {
  constructor() {
    this.addEventAboutShowAllRoutes();
  }
  addEventAboutShowAllRoutes() {
    document
      .querySelector("#line-manager-button")
      .addEventListener("click", () => alert("line-manager-button"));
  }
}
