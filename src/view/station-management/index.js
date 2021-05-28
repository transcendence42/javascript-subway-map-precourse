import { storage } from '../../model/index.js';
import { elementIds } from '../../utils.js';

const makeStationTable = (station) => {
  return `<tr data-station='${station}'>
            <td>${station}</td>
            <td>
              <button class='station-delete-button' data-station='${station}-button'>삭제</button>
            </td>
          </tr>`;
};

const renderStation = () => {
  const subwayStation = storage.getLocalStorageMap('subway-station');
  let result = '';
  for (const station of [...subwayStation.keys()]) {
    result += makeStationTable(station);
  }
  elementIds.stationTableTbody.insertAdjacentHTML('afterbegin', result);
};

export const renderStationManagement = () => {
  renderStation();
};
