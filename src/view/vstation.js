import { Station } from '../constant.js';
import { removeAllChildren } from '../utils.js'

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

export function removeStationTable(tr) {
  const parent = tr.parentNode;
  parent.removeChild(tr);
}

export function renderStationTable() {
  const stations = JSON.parse(localStorage.getItem('stations'));
  const table = document.getElementById(Station.TABLE);
  if (stations) {
    removeAllChildren(table);
    table.insertAdjacentHTML('afterbegin', Station.TH);
    stations.forEach((station) => {
      table.insertAdjacentHTML(
        'beforeend',
        `<tr>
        <td style="border:1px solid;">${station}</td>
        <td style="border:1px solid;"><button data-id="${station}" data-action="deleteStation">삭제</button></td>
        </tr>`,
      );
    });
  }
}
