import { ID, NAME, CLASS } from '../../constants/index.js';

export const lineManagerDiv = () => {
  return `
  <div id='${ID.LINE_MANAGER}' hidden>
    <h3>${NAME.LINE_NAME}</br>
    <input id='${ID.LINE_NAME_INPUT}' placeholder='${NAME.LINE_NAME_INPUT}' />
    </h3>
    <span><strong>${NAME.LINE_START_STATION}
    <select id='${ID.LINE_START_STATION_SELECTOR}'></select>
    </strong></span></br>
    <span><strong>${NAME.LINE_END_STATION}
    <select id='${ID.LINE_END_STATION_SELECTOR}'></select>
    </strong></span></br></br>
    <button id='${ID.LINE_ADD_BUTTON}'>${NAME.LINE_ADD}</button>
    <h2>${NAME.LINE_LIST}</h2>
  </div>
  `;
};

export const lineListTable = () => {
  return `
  <table border='1' id='${ID.LINE_LIST_TABLE}'>
  </table>
  `;
};

export const lineListTableThead = () => {
  return `
  <thead>
    <tr>
      <th>${NAME.LINE_LIST_NAME}</th>
      <th>${NAME.LINE_LIST_START_STATION}</th>
      <th>${NAME.LINE_LIST_END_STATION}</th>
      <th>${NAME.LINE_LIST_SETTING}</th>
    </tr>
  </thead>
  `
}

export const lineListTableTbody = (lineName, startStation, endStation) => {
  return `
  <tbody>
    <tr>
      <td>${lineName}</td>
      <td>${startStation}</td>
      <td>${endStation}</td>
      <td><button class='${CLASS.LINE_DELETE_BUTTON}'>${NAME.LINE_LIST_DELETE}</td>
    </tr>
  </tbody>
  `
}