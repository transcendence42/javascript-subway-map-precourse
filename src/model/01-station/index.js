import { storeLocalStorage, loadLocalStorage } from '../utils/handle-storage.js';

export const storeStationLocalStorage = (name) => {
  let stations = loadStationLocalStorage();
  if (stations === null) {
    stations = [];
  }
  stations.push({name: name, line: 0});
  storeLocalStorage('stations', stations)
}

export const loadStationLocalStorage = () => {
  if (loadLocalStorage('stations') === null) {
    let stations = [];
    return stations;
  }
  return loadLocalStorage('stations');
}