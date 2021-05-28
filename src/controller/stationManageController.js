import StationManageView from "../view/stationManageView.js";
import Storage from "../model/storage.js";

export default class StationManageController {
  constructor() {
    this.stationManageView = new StationManageView();
    this.storage = new Storage();
    this.addShowAllStationsEvent();
  }
  addShowAllStationsEvent() {
    document
      .querySelector("#station-manager-button")
      .addEventListener("click", () => this.showAllStations());
  }
  addStationAddEvent() {
    document
      .querySelector("#station-add-button")
      .addEventListener("click", () => {
        let stationName = document.querySelector("#station-name-input").value;
        if (!this.isValidStationName(stationName)) {
          alert("역 이름이 잘못되었습니다.");
          return;
        }
        this.appendStation(this.storage.addStation(stationName));
      });
  }
  isValidStationName(stationName) {
    if (stationName == null || stationName == "") return false;
    if (stationName.search(/[^가-힣]/g) != -1) return false;
    if (stationName.length < 2) return false;
    return true;
  }
  showAllStations() {
    this.stationManageView.makeHtml(this.storage.getAllStation());
    this.addStationAddEvent();
    this.addDeleteStationEvent();
  }
  addDeleteStationEvent() {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "deleteStationBtn") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        let tr = evt.target.parentElement.parentElement;
        this.storage.deleteStation(tr.firstElementChild.innerText);
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
