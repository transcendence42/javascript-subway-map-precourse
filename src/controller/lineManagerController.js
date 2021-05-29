import LineManageView from "../view/lineManageView.js";
import StationDAO from "../model/stationDAO.js";
import LineDAO from "../model/lineDAO.js";
import { ERROR_CODE, ERROR_CODE_MSG } from "./lineManagerControllerError.js";

export default class LineManagerController {
  constructor() {
    this.lineManageView = new LineManageView();
    this.lineDAO = new LineDAO();
    this.stationDAO = new StationDAO();
    this.addEventAboutShowAllLines();
  }
  addEventAboutShowAllLines() {
    document
      .querySelector("#line-manager-button")
      .addEventListener("click", () => {
        let stations = this.stationDAO.getAllStations();
        this.lineManageView.showAllLines(stations, this.lineDAO.getAllLines());
        this.addEventAboutAddLine();
        this.addEventAboutDeleteLine();
      });
  }
  addEventAboutDeleteLine() {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "line-delete-button") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        let lineName = evt.target.dataset.lineName;
        this.lineDAO.deleteLine(lineName);
        this.lineManageView.deleteLineFromTable(lineName);
      }
    });
  }
  addEventAboutAddLine() {
    document.querySelector("#line-add-button").addEventListener("click", () => {
      let lineName = document.querySelector("#line-name-input").value;
      let lineStartStation = document.querySelector(
        "#line-start-station-selector"
      ).value;
      let lineEndStation = document.querySelector("#line-end-station-selector")
        .value;
      let errCode = this.isValidForAddingLine(
        lineName,
        lineStartStation,
        lineEndStation
      );
      if (errCode != ERROR_CODE.SUCCESS) {
        alert(ERROR_CODE_MSG[errCode]);
        return;
      }
      this.appendLineToTable(
        this.lineDAO.addLine(lineName, lineStartStation, lineEndStation)
      );
    });
  }
  isValidForAddingLine(lineName, lineStartStation, lineEndStation) {
    if (lineName == null || lineName == "") return ERROR_CODE.EMPTY_LINE_NAME;
    if (lineName.search(/[^가-힣0-9]/g) != -1)
      return ERROR_CODE.WRONG_LINE_NAME;
    if (lineStartStation == lineEndStation)
      return ERROR_CODE.EQUAL_UPWARD_AND_DOWNWARD;
    return ERROR_CODE.SUCCESS;
  }
  appendLineToTable(lineName) {
    if (lineName == null) {
      alert(ERROR_CODE_MSG[ERROR_CODE.LINE_NAME_DUP]);
    } else {
      let line = this.lineDAO.getAllLines();
      let stationsList = line[lineName];
      let lineStartStation = stationsList[0];
      let lineEndStation = stationsList[stationsList.length - 1];
      this.lineManageView.addLineToTable(
        lineName,
        lineStartStation,
        lineEndStation
      );
    }
  }
}
