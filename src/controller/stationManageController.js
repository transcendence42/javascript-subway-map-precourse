import StationManageView from "../view/stationManageView.js";
import Storage from "../model/storage.js";

export default class StationManageController {
  showAllStations() {
    let stationManageView = new StationManageView();
    let storage = new Storage();
    document.querySelector("#show").innerHTML += stationManageView.makeHtml(
      storage.getAllStation()
    );
    let btnAddStation = document.querySelector("#station-add-button");
    btnAddStation.addEventListener("click", evt => {
      alert("btnAddStation");
    });
  }
}
