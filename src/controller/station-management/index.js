import { elementIds } from "./utils.js";

function displayStationManagement() {
  elementIds.stationManagement.hidden = false;
}

function stationManagementRender() {
  displayStationManagement();
}

export { stationManagementRender };
