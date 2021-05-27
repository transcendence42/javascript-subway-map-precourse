import StationManageController from "./controller/stationManageController.js";

document.addEventListener("DOMContentLoaded", () => {
  let btnStationManager = document.querySelector("#station-manager-button");
  btnStationManager.addEventListener("click", evt => {
    new StationManageController().show();
  });
});
