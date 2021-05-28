export default class Storage {
  constructor() {
    this.localStorage = window.localStorage;
    this.stations = this.getAllStation();
  }
  getAllStation() {
    if (!this.localStorage.getItem("stations")) return [];
    return this.localStorage.getItem("stations").split(",");
  }
  addStation(stationName) {
    if (this.stations.indexOf(stationName) != -1) return null;
    this.stations.push(stationName);
    this.localStorage.setItem("stations", this.stations.toString());
    return stationName;
  }
}
