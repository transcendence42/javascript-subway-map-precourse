import { checkValidStationName } from './check.js';
import { storage } from '../../model/index.js';

export const addStationLocalStorage = (stationNameInput) => {
  if (!storage.getLocalStorage('subway-station')) {
    storage.setLocalStorageMap('subway-station', new Map());
  }
  const subwayStation = storage.getLocalStorageMap('subway-station');
  if (!checkValidStationName(subwayStation, stationNameInput)) {
    return false;
  }
  subwayStation.set(stationNameInput, []);
  storage.setLocalStorageMap('subway-station', subwayStation);
  console.log('역 추가', storage.getLocalStorage('subway-station'));
  return true;
};
