import { Section } from '../constant.js';
import { removeAllChildren } from '../utils.js';

export function renderLineButtons() {
  const lines = JSON.parse(localStorage.getItem('lines'));
  const div = document.getElementById(Section.DIV);
  if (lines) {
    removeAllChildren(div);
    lines.forEach((line) =>
      div.insertAdjacentHTML(
        'beforeend',
        `<button data-id="${line.name}" data-action="showSectionManager">${line.name}</button> `,
      ),
    );
    div.insertAdjacentHTML(
      'afterbegin',
      '<h3>구간을 수정할 노선을 선택해주세요.</h3>',
    );
  }
  div.insertAdjacentHTML('beforeend', '<div id="#section-manager"></div>');
}

function renderStationOptions() {
  const sectionSelector = document.getElementById(Section.SELECT);
  const stations = JSON.parse(localStorage.getItem('stations'));

  if (stations === null) {
    return;
  }
  stations.forEach((station) => {
    sectionSelector.insertAdjacentHTML(
      'beforeend',
      `<option>${station}</option>`,
    );
  });
}

export function renderSectionTable(line) {
  const lines = JSON.parse(localStorage.getItem('lines'));
  const stations = lines.filter((item) => item.name === line)[0].stations;
  const table = document.getElementById(Section.TABLE);
  if (stations) {
    removeAllChildren(table);
    stations.forEach((station, index) =>
      table.insertAdjacentHTML(
        'beforeend',
        `<tr>
      <td style="border:1px solid;">${index}</td>
      <td style="border:1px solid;">${station}</td>
      <td style="border:1px solid;">
      <button class="${Section.DELETEBTN}" data-line="${line}" data-value="${station}">노선에서 제거</button>
      </td>`,
      ),
    );
  }
  table.insertAdjacentHTML('afterbegin', Section.TH);
}

export function renderSectionManager(line) {
  const sectionManager = document.getElementById(Section.MANAGER);
  sectionManager.setAttribute('data-line', line);
  removeAllChildren(sectionManager);
  sectionManager.insertAdjacentHTML(
    'beforeend',
    `<h2>${line} 관리</h2>
    <h3>구간 등록</h3>
    <select id="${Section.SELECT}"></select>
    <input id="${Section.INPUT}" type="number" placeholder="순서"/>
    <button id="${Section.REGISTER}">등록</button>
    <br><br>
    <table id="${Section.TABLE}"></table>`,
  );
  renderStationOptions();
  renderSectionTable(line);
}
