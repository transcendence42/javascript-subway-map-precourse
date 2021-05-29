import { ID, NAME } from '../../constants/index.js';

export const stationManagerDiv = () => {
  return `
  <div id='${ID.STATION_MANAGER}' hidden>
    <h3>${NAME.STATION_NAME}</br>
    <input id ='${ID.STATION_NAME_INPUT}' placeholder='${NAME.STATION_NAME_INPUT}'/>
    <button id ='${ID.STATION_ADD_BUTTON}' data-add>${NAME.STATION_ADD}</button></h3>
    <h2>${NAME.STATION_LIST}</h2>
  </div>
  `;
};

export const stationListTable = () => {
  return `
  <table border='1' id='${ID.STATION_LIST_TABLE}'>
    <tr>
      <th>${NAME.STATION_LIST_NAME}</th>
      <th>${NAME.STATION_LIST_SETTING}</th>
    </tr>
  </table>
  `;
};

export const stationListTableTr = (name) => {
  return `
    <tr>
      <td>${name}</td>
      <td><button class='${ID.STATION_DELETE_BUTTON}'>${NAME.STATION_LIST_DELETE}</td>
    </tr>
  `
}
