import SectionManagerView from "../view/sectionManagerView.js";
import LineDAO from "../model/lineDAO.js";
import StationDAO from "../model/stationDAO.js";
import { ERROR_CODE, ERROR_CODE_MSG } from "./sectionManagerControllerError.js";

export default class SectionManagerController {
  constructor() {
    this.lineDAO = new LineDAO();
    this.sectionManagerView = new SectionManagerView();
    this.addEventAboutShowSectionPage();
  }
  addEventAboutShowSectionPage() {
    document
      .querySelector("#section-manager-button")
      .addEventListener("click", () => {
        let lines = this.lineDAO.getAllLines();
        let lineList = Object.keys(lines);
        this.sectionManagerView.showAllLines(lineList);
        this.addEventAboutLineButtons();
      });
  }
  addEventAboutLineButtons() {
    document.querySelector("ul.section-page").addEventListener("click", evt => {
      if (evt.target.className == "section-line-menu-button") {
        let stationDAO = new StationDAO();
        let allStations = stationDAO.getAllStations();
        let lineName = evt.target.innerText;
        let lineStations = this.lineDAO.getStationsList(lineName);
        this.sectionManagerView.showManageSection(
          lineName,
          lineStations,
          allStations
        );
        this.addEventAboutRegisterButton(lineName);
        this.addEventAboutDeleteButtons(lineName);
      }
    });
  }
  addEventAboutDeleteButtons(lineName) {
    document.querySelector("table").addEventListener("click", evt => {
      if (evt.target.className == "section-delete-button") {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        if (document.querySelectorAll("tr").length <= 3) {
          alert(ERROR_CODE_MSG[ERROR_CODE.LESS_THAN_TWO]);
          return;
        }
        let tr = evt.target.parentElement.parentElement;
        let stationName = evt.target.dataset.stationName;
        this.lineDAO.deleteStationInLine(lineName, stationName);
        tr.remove();
        this.sectionManagerView.changeStationsOrder();
        this.sectionManagerView.decreaseMaxNumInInput();
      }
    });
  }
  addEventAboutRegisterButton(lineName) {
    document
      .querySelector("#section-add-button")
      .addEventListener("click", evt => {
        let stationName = document.querySelector("#section-station-selector")
          .value;
        let idx = document.querySelector("#section-order-input").value;
        if (this.lineDAO.addStationInLine(lineName, stationName, idx) == null) {
          alert(ERROR_CODE_MSG[ERROR_CODE.ALREADY_EXIST_IN_SECTION]);
          return;
        }
        this.sectionManagerView.appendStationToTable(stationName, idx);
        this.sectionManagerView.increaseMaxNumInInput();
      });
  }
}
