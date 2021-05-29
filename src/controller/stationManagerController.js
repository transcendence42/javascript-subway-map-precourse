import StationManagerView from "../view/stationManagerView.js";
import StationDAO from "../model/stationDAO.js";
import { ERROR_CODE, ERROR_CODE_MSG } from "./stationManagerControllerError.js";

export default class StationManagerController {
  constructor() {
    this.stationManagerView = new StationManagerView();
    this.stationDAO = new StationDAO();
    this.addEventAboutShowAllStations();
  }
  addEventAboutShowAllStations() {
    document
      .querySelector("#station-manager-button")
      .addEventListener("click", () => this.showAllStations());
  }
  addEventAboutAddStation() {
    document
      .querySelector("#station-add-button")
      .addEventListener("click", () => {
        let stationName = document.querySelector("#station-name-input").value;
        let errCode = this.isValidStationName(stationName);
        if (errCode != ERROR_CODE.SUCCESS) {
          alert(ERROR_CODE_MSG[errCode]);
          return;
        }
        this.appendStation(this.stationDAO.addStation(stationName));
      });
  }
  isValidStationName(stationName) {
    if (stationName == null || stationName == "")
      return ERROR_CODE.EMPTY_STATION_NAME;
    if (stationName.search(/[^가-힣]/g) != -1)
      return ERROR_CODE.WRONG_STATION_NAME;
    if (stationName.length < 2) return ERROR_CODE.WRONG_STATION_NAME;
    return ERROR_CODE.SUCCESS;
  }
  showAllStations() {
    this.stationManagerView.makeHtml(this.stationDAO.getAllStations());
    this.addEventAboutAddStation();
    this.addEventAboutDeleteStation();
  }
  addEventAboutDeleteStation() {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "delete-station-btn") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        let tr = evt.target.parentElement.parentElement;
        let stationName = tr.firstElementChild.innerText;
        if (!this.stationDAO.deleteStation(stationName)) {
          alert(ERROR_CODE_MSG[ERROR_CODE.STATION_IN_ROUTE]);
          return;
        }
        tr.remove();
      }
    });
  }
  appendStation(station) {
    if (station == null) {
      alert(ERROR_CODE_MSG[ERROR_CODE.STATION_NAME_DUP]);
    } else {
      this.stationManagerView.addStationToTable(station);
      document.querySelector("#station-name-input").value = "";
    }
  }
}
