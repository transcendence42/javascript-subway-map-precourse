export default class LineManageView {
  constructor() {}
  showAllLines(stations, lines) {
    let ret = `<p><span>노선 이름</span></p>
      <p><input id="line-name-input" type="text" placeholder="노선 이름을 입력해주세요"></p>
      <p><span>상행 종점</span>
      <select name="upward-end-station" id="line-start-station-selector" class="manage-line-page">`;
    stations.forEach(item => {
      ret += `<option>${item}</option>`;
    });
    ret += `</select>
      </p>
      <p><span>하행 종점</span>
      <select name="downward-end-station" id="line-end-station-selector" class="manage-line-page">`;
    stations.forEach(item => {
      ret += `<option>${item}</option>`;
    });
    ret += `</select></p>
      <button id="line-add-button">노선 추가</button>
      <h2>지하철 노선 목록</h2>
      <table>
          <tbody>
          <tr>
                  <th>노선 이름</th>
                  <th>상행 종점역</th>
                  <th>하행 종점역</th>
                  <th>설정</th>
              </tr>`;
    Object.keys(lines).forEach(lineName => {
      let lineStartStation = lines[lineName][0];
      let numberOfStationsInLine = lines[lineName].length;
      let lineEndStation = lines[lineName][numberOfStationsInLine - 1];
      ret += `<tr><td>${lineName}</td><td>${lineStartStation}</td><td>${lineEndStation}</td><td><button class="line-delete-button">삭제</button></td></tr>`;
    });
    ret += `</tbody></table>`;
    document.querySelector("#show").innerHTML = ret;
  }
  addLineToTable(lineName, lineStartStation, lineEndStation) {
    let tbody = document.querySelector("table>tbody");
    tbody.innerHTML += `<tr>
    <td>${lineName}</td><td>${lineStartStation}</td><td>${lineEndStation}</td><td><button class="line-delete-button">삭제</button></td></tr>`;
  }
}
