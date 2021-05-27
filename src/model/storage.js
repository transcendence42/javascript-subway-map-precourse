export default class Storage {
  constructor() {
    this.localStorage = window.localStorage;
    this.localStorage.clear();
  }
  getAllStation() {
    if (!this.localStorage.getItem("stations")) return [];
    return this.localStorage.getItem("stations").split(",");
  }
  addStation(newStation) {
    let stations = this.getAllStation();
    if (stations.indexOf(newStation) != -1) return null;
    stations.push(newStation);
    this.localStorage.setItem("stations", stations.toString());
    return newStation;
  }
}
