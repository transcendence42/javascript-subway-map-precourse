import { Station } from '../constant.js';
import { removeAllChildren } from '../utils.js';
import { getStations } from '../model/station.js';

export function addStationTable(station) {
  const table = document.getElementById(Station.TABLE);
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
      <td style="border:1px solid;">${station}</td>
      <td style="border:1px solid;">
      <button data-id="${station}" data-action="deleteStation">삭제</button>
      </td>
      </tr>`,
  );
}

export function removeStationTable(tbody) {
  const parent = tbody.parentNode;
  parent.removeChild(tbody);
}

export function renderStationTable() {
  const stations = getStations();
  const table = document.getElementById(Station.TABLE);
  if (stations) {
    removeAllChildren(table);
    table.insertAdjacentHTML('afterbegin', Station.TH);
    stations.forEach((station) => {
      table.insertAdjacentHTML(
        'beforeend',
        `<tr><td style="border:1px solid;">${station}</td>
        <td style="border:1px solid;"><button data-id="${station}" data-action="deleteStation">삭제</button></td></tr>`,
      );
    });
  }
}
