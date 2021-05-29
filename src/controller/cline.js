import { Line } from '../constant.js';
import { addLine, deleteLine } from '../model/line.js';
import { removeLineTable, addLineTable } from '../view/vline.js';

function clickAddLine() {
  const newLine = document.getElementById(Line.INPUT).value;
  const start = document.getElementById(Line.START).value;
  const end = document.getElementById(Line.END).value;

  if (start === end) {
    alert('상행 종점역과 하행 종점역이 같을 수 없습니다.');
  } else if (addLine(newLine, start, end) == false) {
    alert('중복된 지하철 노선 이름은 등록할 수 없습니다.');
  } else {
    addLineTable(newLine, start, end);
    document.getElementById(Line.INPUT).value = '';
  }
}

function activateTableListener() {
  document.getElementById(Line.TABLE).addEventListener('click', (e) => {
    const target = e.target;
    const action = target.dataset.action;

    if (action === 'deleteLine') {
      removeLineTable(target.closest('tbody'));
      deleteLine(target.dataset.id);
    }
  });
}

function renderStationOptions(stations) {
  const start = document.getElementById(Line.START);
  const end = document.getElementById(Line.END);
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

export function constructLine() {
  const stations = JSON.parse(localStorage.getItem('stations'));
  const lineAddButton = document.getElementById(Line.ADDBTN);
  lineAddButton.addEventListener('click', clickAddLine);
  if (stations) {
    renderStationOptions(stations);
    activateTableListener();
  }
}
