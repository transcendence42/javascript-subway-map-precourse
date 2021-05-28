import { storeLocalStorage, loadLocalStorage } from '../../utils/handleStorage.js';

export default class Station {
	constructor() {
		this.stations = [];
	}

  getStation() {
    return this.stations;
  }

	addStation(name) {
		const station = {name: name, line: 0};
    this.stations.push(station);
  }

  // delete 함수는 추후 에러처리 필요
  deleteStation(index) {
    this.stations.splice(index, 1);
  }

  storeStationLocalStorage() {
    storeLocalStorage('station', this.stations);
  }

  loadStationLocalStorage() {
    this.stations = loadLocalStorage('station');
  }
}
