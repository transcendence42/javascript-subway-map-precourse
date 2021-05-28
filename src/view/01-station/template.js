import { ID, NAME } from '../../constants/index.js';

export const stationManagerDiv = () => {
  return `
  <div id='${ID.STATION_MANAGER}' hidden>
    <h3>역 이름</br>
    <input id ='${ID.STATION_NAME_INPUT}' placeholder='역 이름을 입력해주세요.'/>
    <button id ='${ID.STATION_ADD_BUTTON}'>역 추가</button></h3>
    <h2>🚉 지하철 역 목록</h2>
  </div>
  `;
};

export const stationListTable = () => {
  return `
  <table border='1' id='${ID.STATION_LIST_TABLE}'>
    <tr>
      <th>역 이름</th>
      <th>설정</th>
    </tr>
  </table>
  `;
};

export const stationListTableTr = (name) => {
  return `
    <tr>
      <td>${name}</td>
      <td><button id='${ID.STATION_DELETE_BUTTON}'>삭제</td>
    </tr>
  `
}
