import { storage } from '../../model/index.js';
import {elementIds} from '../../utils.js';

const makeStationTable = station => {
  return `<tr><td>${station}</td><td><button id='stationDeleteButton'>삭제</button></td></tr>`;
};

const renderStation = () => {
  const subwayStation = storage.getLocalStorageMap('subway-station');
  let result = '';
  for (let station of [...subwayStation.keys()]) {
    result += makeStationTable(station);
  }
  elementIds.stationTableTbody.insertAdjacentHTML('afterbegin', result);
};

export const renderStationManagement = () => {
  renderStation();
};
