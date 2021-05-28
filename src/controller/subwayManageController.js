import StationManageController from "./stationManageController.js";
import RouteManageController from "./routeManageController.js";
import SectionManageController from "./sectionManageController.js";

export default class SubwayManageController {
  constructor() {
    const stationManageController = new StationManageController();
    const routeManageController = new RouteManageController();
    const sectionManageController = new SectionManageController();
  }
}
