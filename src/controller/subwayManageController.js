import StationManageController from "./stationManageController.js";
import RouteManageController from "./routeManageController.js";
import SectionManageController from "./sectionManageController.js";
import MapController from "./mapController.js";

export default class SubwayManageController {
  constructor() {
    const stationManageController = new StationManageController();
    const routeManageController = new RouteManageController();
    const sectionManageController = new SectionManageController();
    const mapController = new MapController();
  }
}
