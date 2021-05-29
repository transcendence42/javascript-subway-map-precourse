import {
  storeLocalStorage,
  loadLocalStorage
} from '../utils/handle-storage.js';

export const loadStationLocalStorage = () => {
  if (loadLocalStorage('stations') === null) {
    let stations = [];
    return stations;
  }
  return loadLocalStorage('stations');
};

export const addStationLocalStorage = (stationName) => {
  let stations = loadStationLocalStorage();
  if (stations === null) {
    stations = [];
  }
  stations.push({ name: stationName, line: 0 });
  storeLocalStorage('stations', stations);
};

export const deleteStationLocalStorage = (stationName) => {
  let stations = loadStationLocalStorage();
  const target = stations.find((station) => {
    return station.name === stationName;
  });
  stations.splice(stations.indexOf(target), 1);
  localStorage.removeItem('stations');
  storeLocalStorage('stations', stations)
};
