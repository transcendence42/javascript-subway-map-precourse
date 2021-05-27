import StationManageController from "./controller/stationManageController.js";

document.addEventListener("DOMContentLoaded", () => {
  let btnStationManage = document.querySelector("#station-manager-button");
  btnStationManage.addEventListener("click", evt => {
    new StationManageController().show();
  });
});
