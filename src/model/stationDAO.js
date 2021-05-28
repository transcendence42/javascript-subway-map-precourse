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
  deleteStation(stationName) {
    let stations = this.getAllStations();
    stations = stations.filter(item => item != stationName);
    this.localStorage.setItem("stations", stations.toString());
  }
}
