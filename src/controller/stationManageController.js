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
        if (stationName == null || stationName == "") {
          alert("역 이름을 입력하세요.");
          document.querySelector("#station-name-input").value = "";
          return;
        }
        this.appendStation(this.storage.addStation(stationName));
      });
  }
  showAllStations() {
    this.stationManageView.makeHtml(this.storage.getAllStation());
    this.addStationAddEvent();
    this.addDeleteStationEvent();
  }
  addDeleteStationEvent() {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "deleteStationBtn") {
        let tr = evt.target.parentElement.parentElement;
        this.storage.deleteStation(tr.firstElementChild.innerText);
        tr.remove();
      }
    });
  }
  appendStation(station) {
    if (station == null || station == "") {
      alert("duplicate");
    } else {
      this.stationManageView.addStationToTable(station);
    }
  }
}
