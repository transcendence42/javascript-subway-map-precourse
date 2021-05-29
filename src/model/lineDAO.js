export default class LineDAO {
  constructor() {
    this.localStorage = window.localStorage;
  }
  getAllLines() {
    if (!this.localStorage.getItem("lines")) return {};
    return JSON.parse(this.localStorage.getItem("lines"));
  }
  addLine(lineName, lineStartStation, lineEndStation) {
    let lines = this.getAllLines();
    if (Object.keys(lines).indexOf(lineName) != -1) return null;
    lines[lineName] = [lineStartStation, lineEndStation];
    this.localStorage.setItem("lines", JSON.stringify(lines));
    return lineName;
  }
  deleteLine(lineName) {
    let lines = this.getAllLines();
    delete lines[lineName];
    this.localStorage.setItem("lines", JSON.stringify(lines));
  }
  getStationsList(lineName) {
    let lines = this.getAllLines();
    let stationsList = lines[lineName];
    if (stationsList == null) {
      alert("잘못된 경로입니다.");
    }
    return stationsList;
  }
  addStationInLine(lineName, stationName, idx) {
    let lines = this.getAllLines();
    if (lines[lineName].includes(stationName)) return null;
    lines[lineName].splice(idx, 0, stationName);
    this.localStorage.setItem("lines", JSON.stringify(lines));
    return stationName;
  }
  deleteStationInLine(lineName, stationName) {
    let lines = this.getAllLines();
    lines[lineName] = lines[lineName].filter(item => {
      return item != stationName;
    });
    this.localStorage.setItem("lines", JSON.stringify(lines));
  }
}
