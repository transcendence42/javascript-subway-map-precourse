import LineDAO from "./lineDAO.js";

export default class StationDAO {
  constructor() {
    this.localStorage = window.localStorage;
  }
  getAllStations() {
    if (!this.localStorage.getItem("stations")) return [];
    return this.localStorage.getItem("stations").split(",");
  }
  addStation(stationName) {
    let stations = this.getAllStations();
    if (stations.indexOf(stationName) != -1) return null;
    stations.push(stationName);
    this.localStorage.setItem("stations", stations.toString());
    return stationName;
  }
  isStationInLine(stationName) {
    let lineDAO = new LineDAO();
    let lines = lineDAO.getAllLines();
    let lineArray = Object.keys(lines);
    let ret = false;
    lineArray.forEach(line => {
      if (lines[line].includes(stationName)) ret = true;
    });
    return ret;
  }
  deleteStation(stationName) {
    let stations = this.getAllStations();
    if (this.isStationInLine(stationName)) return null;
    stations = stations.filter(item => item != stationName);
    this.localStorage.setItem("stations", stations.toString());
    return stationName;
  }
}
