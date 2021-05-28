import { MainButtons, Station, Line } from '../constant.js';
import { renderStationTable } from './viewStation.js';

function getBtns() {
  return `<div id='#menu-buttons'>
  <button id='${MainButtons.STATION}'>1. 역 관리</button>
  <button id='${MainButtons.LINE}'>2. 노선 관리</button>
  <button id='${MainButtons.SECTION}'>3. 구간 관리</button>
  <button id='${MainButtons.MAP}'>4. 지하철 노선도 출력</button>
  </div>`;
}

function getStationPart() {
  return `<div id='${Station.DIV}' style="display:none;">
  <h3>역 이름</h3>
  <input type="text" id='${Station.INPUT}' placeholder="역 이름을 입력해주세요"/>
  <button id='${Station.ADDBTN}'>역 추가</button>
  <h2>🚉 지하철 역 목록</h2>
  <table id='${Station.TABLE}' style="border: 1px solid;">
  <th style="border: 1px solid"><strong>역 이름</strong></th>
  <th style="border: 1px solid"><strong>설정</strong></th>
  </table>
  </div>`;
}

function getLinePart() {
  return `<div id='${Line.DIV}' style="display:none;">
  <h3>노선 이름</h3>
  <input type="text" id='${Line.INPUT}' placeholder="노선 이름을 입력해주세요"/>
  <br><br>
  <div>
    <span>상행 종점</span>
    <select id='${Line.START}'>
    </select>
  </div>
  <div>
    <span>하행 종점</span>
    <select id='${Line.END}'>
    </select>
  </div>
  <br>
  <button id='${Line.ADDBTN}'>노선 추가</button>
  <h2>🚉 지하철 노선 목록</h2>
  </div>
  `;
}

function getSectionPart() {
  return `<div id="#sectionPart" style="display:none;">
  <h3>구간을 수정할 노선을 선택해주세요</h3>
  </div>
  `;
}

function getMapPart() {
  return `<div id="#mapPart" style="display:none;">
  </div>`;
}

function constructor() {
  const body = document.getElementById('app');
  body.insertAdjacentHTML('beforeend', getBtns());
  body.insertAdjacentHTML('beforeend', getStationPart());
  body.insertAdjacentHTML('beforeend', getLinePart());
  body.insertAdjacentHTML('beforeend', getSectionPart());
  body.insertAdjacentHTML('beforeend', getMapPart());
  renderStationTable();
}

export default function view() {
  constructor();
}
