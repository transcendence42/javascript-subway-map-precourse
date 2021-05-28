import { ID } from '../../constants/index.js';

export const lineManagerDiv = () => {
  return `
  <div id='${ID.LINE_MANAGER}' hidden>
    <h3>노선 이름</br>
    <input id='${ID.LINE_NAME_INPUT}' placeholder="노선 이름을 입력해주세요." />
    </h3>
    <span><strong>상행 종점
    <select id='${ID.LINE_START_STATION_SELECTOR}'></select>
    </strong></span></br>
    <span><strong>하행 종점
    <select id='${ID.LINE_END_STATION_SELECTOR}'></select>
    </strong></span></br></br>
    <button id='${ID.LINE_ADD_BUTTON}'>노선 추가</button>
    <h2>🚉 지하철 노선 목록</h2>
  </div>
  `;
};

export const lineTable = () => {
  return `
  <div id='${ID.LINE_TABLE}'>
    <table border='1'>
      <thead>
        <tr>
        <th>노선 이름</th>
        <th>상행 종점역</th>
        <th>하행 종점역</th>
        <th>설정</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
  `;
};
