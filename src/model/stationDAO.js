export default class StationDAO {
  constructor() {
    this.localStorage = window.localStorage;
  }
  getAllStation() {
    if (!this.localStorage.getItem("stations")) return [];
    return this.localStorage.getItem("stations").split(",");
  }
  addStation(stationName) {
    let stations = this.getAllStation();
    if (stations.indexOf(stationName) != -1) return null;
    stations.push(stationName);
    this.localStorage.setItem("stations", stations.toString());
    return stationName;
  }
  deleteStation(stationName) {
    let stations = this.getAllStation();
    stations = stations.filter(item => item != stationName);
    this.localStorage.setItem("stations", stations.toString());
  }
}
