import { ID, NAME } from '../../constants/index.js';

const createStationManagerDiv = () => {
  return `
    <h3>역 이름</br>
    <input id ='${ID.STATION_NAME_INPUT}' placeholder='역 이름을 입력해주세요.'/>
    <button id '${ID.STATION_ADD_BUTTON}'>역 추가</button></h3>
    <h2>🚉 지하철 역 목록</h2>
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
}

export const stationRenderer = () => {
  const stationManagerDiv = document.createElement('div');
  stationManagerDiv.id = ID.STATION_MANAGER;
  stationManagerDiv.innerHTML = createStationManagerDiv();
  document.querySelector('#app').appendChild(stationManagerDiv);
};