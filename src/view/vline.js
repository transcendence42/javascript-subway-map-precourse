import { Line } from '../constant.js';
import { removeAllChildren } from '../utils.js';

export function addLineTable(newLine, start, end) {
  const table = document.getElementById(Line.TABLE);
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
    <td style="border:1px solid;">${newLine}</td>
    <td style="border:1px solid;">${start}</td>
    <td style="border:1px solid;">${end}</td>
    <td style="border:1px solid;">
    <button data-id="${newLine}" data-action="deleteLine">삭제</button>
    </td>
    </tr>`,
  );
}

export function removeLineTable(tbody) {
  const parent = tbody.parentNode;
  console.log(parent);
  console.log(tbody);
  parent.removeChild(tbody);
}

function renderStationOptions() {
  const stations = JSON.parse(localStorage.getItem('stations'));
  const start = document.getElementById(Line.START);
  const end = document.getElementById(Line.END);

  if (stations) {
    stations.forEach((station) => {
      start.insertAdjacentHTML(
        'beforeend',
        `<option value="${station}">${station}</option>`,
      );
      end.insertAdjacentHTML(
        'beforeend',
        `<option value="${station}">${station}</option>`,
      );
    });
  }
}

export function renderLineTable() {
  const lines = JSON.parse(localStorage.getItem('lines'));
  const table = document.getElementById(Line.TABLE);
  if (lines) {
    removeAllChildren(table);
    removeAllChildren(document.getElementById(Line.START));
    removeAllChildren(document.getElementById(Line.END));
    renderStationOptions();
    table.insertAdjacentHTML('afterbegin', Line.TH);
    lines.forEach((line) => {
      table.insertAdjacentHTML(
        'beforeend',
        `<tr>
        <td style="border:1px solid;">${line.name}</td>
        <td style="border:1px solid;">${line.stations[0]}</td>
        <td style="border:1px solid;">${
          line.stations[line.stations.length - 1]
        }</td>
        <td style="border:1px solid;">
        <button data-id="${line.name}" data-action="deleteLine">삭제</button>
        </td>
        </tr>`,
      );
    });
  } else {
    renderStationOptions();
  }
}
