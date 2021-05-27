import { ID, NAME } from '../../constants/index.js';

const createStationManagerDiv = () => {
  return `
  <div id='${ID.STATION_MANAGER}' hidden>
    <h3>역 이름</br>
    <input id ='${ID.STATION_NAME_INPUT}' placeholder='역 이름을 입력해주세요.'/>
    <button id '${ID.STATION_ADD_BUTTON}'>역 추가</button></h3>
    <h2>🚉 지하철 역 목록</h2>
  <div>
  `;
};

const createStationListTable = () => {
  return `
  <div id='${ID.STATION_LIST_TABLE}'>
    <table border='1'>
      <thead>
        <tr>
          <th>역 이름</th>
          <th>설정</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
  `;
};

const createStationManager = () => {
  const appDiv = document.getElementById('app');
  appDiv.insertAdjacentHTML(`beforeend`, createStationManagerDiv());
  const stationManagerDiv = document.getElementById(ID.STATION_MANAGER);
  stationManagerDiv.insertAdjacentHTML(`beforeend`, createStationListTable());
};

export const stationRenderer = () => {
  createStationManager();
};
