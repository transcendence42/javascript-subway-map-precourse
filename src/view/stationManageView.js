export default class StationManageView {
  makeHtml(stations) {
    let ret = `
        <span><p>역 이름</p></span>
        <input type="text" id="station-name-input">
        <button id="station-add-button">역 추가</button>
        <h2>지하철 역 목록</h2>
        <table>
          <tbody>
            <tr>
              <th>역 이름</th>
              <th>설정</th>
            </tr>`;
    stations.forEach((item, idx) => {
      ret += `
      <tr>
        <td class="station">${item}</td>
        <td><button class="deleteStationBtn">삭제</button></td>
      </tr>`;
    });
    ret += `</tbody></table>`;
    document.getElementById("show").innerHTML = ret;
  }
  addStationToTable(station) {
    let tbody = document.querySelector("table>tbody");
    tbody.innerHTML += `
    <tr>
      <td class="station">${station}</td>
      <td><button class="deleteStationBtn">삭제</button></td>
    </tr>`;
  }
}
