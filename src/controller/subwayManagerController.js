import StationManagerController from "./stationManagerController.js";
import LineManagerController from "./lineManagerController.js";
import SectionManagerController from "./sectionManagerController.js";
import MapPrintManagerController from "./mapPrintManagerController.js";

export default class SubwayManagerController {
  constructor() {
    const stationManagerController = new StationManagerController();
    const lineManagerController = new LineManagerController();
    const sectionManagerController = new SectionManagerController();
    const mapPrintManagerController = new MapPrintManagerController();
  }
}
