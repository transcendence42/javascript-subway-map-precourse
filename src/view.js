function getBtns() {
  return `<button id='#station-manager-button'>1. 역 관리</button>
  <button id='#line-manager-button'>2. 노선 관리</button>
  <button id='#section-manager-button'>3. 구간 관리</button>
  <button id='#map-print-manager-button'>4. 지하철 노선도 출력</button>`;
}

function getStationPart() {
  return `<div id="#stationPart" style="display:none;">
  <h3>역 이름</h3>
  <input type="text" id="#station-name-input" placeholder="역 이름을 입력해주세요"/>
  <button id="#station-add-button">역 추가</button>
  <h2>🚉 지하철 역 목록</h2>
  </div>`;
}

function getLinePart() {
  return `<div id="#linePart" style="display:none;">
  <h3>노선 이름</h3>
  <input type="text" id="#line-name-input" placeholder="노선 이름을 입력해주세요"/>
  <br><br>
  <div>
    <span>상행 종점</span>
    <select id="#line-start-station-selector">
    </select>
  </div>
  <div>
    <span>하행 종점</span>
    <select id="#line-end-station-selector">
    </select>
  </div>
  <br>
  <button id="#line-add-button">노선 추가</button>
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
}

export default function view() {
  constructor();
}
