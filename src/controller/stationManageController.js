import StationManageView from "../view/stationManageView.js";
import StationDAO from "../model/stationDAO.js";

export default class StationManageController {
  constructor() {
    this.stationManageView = new StationManageView();
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
        if (!this.isValidStationName(stationName)) {
          alert("역 이름이 잘못되었습니다.");
          return;
        }
        this.appendStation(this.stationDAO.addStation(stationName));
      });
  }
  isValidStationName(stationName) {
    if (stationName == null || stationName == "") return false;
    if (stationName.search(/[^가-힣]/g) != -1) return false;
    if (stationName.length < 2) return false;
    return true;
  }
  showAllStations() {
    this.stationManageView.makeHtml(this.stationDAO.getAllStations());
    this.addEventAboutAddStation();
    this.addEventAboutDeleteStation();
  }
  addEventAboutDeleteStation() {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "deleteStationBtn") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        let tr = evt.target.parentElement.parentElement;
        let stationName = tr.firstElementChild.innerText;
        this.stationDAO.deleteStation(stationName);
        tr.remove();
      }
    });
  }
  appendStation(station) {
    if (station == null || station == "") {
      alert("역 이름이 중복됩니다.");
    } else {
      this.stationManageView.addStationToTable(station);
      document.querySelector("#station-name-input").value = "";
    }
  }
}
