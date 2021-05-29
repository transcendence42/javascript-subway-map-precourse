export default class SectionManageView {
  constructor() {}
  showAllRoutes(routeList) {
    let ret = `   <h2>구간을 선택할 노선을 선택해주세요.</h2><ul class="section-page">`;
    routeList.forEach(routeName => {
      ret += `<li><button class="section-route-btn">${routeName}</button></li>`;
    });
    ret += `</ul><div id="manage-section"></div>`;
    document.querySelector("#show").innerHTML = ret;
  }
  showManageSection(routeName, routeStations, allStations) {
    let ret = `<h2>${routeName} 관리</h2>
      <h3>구간 등록</h3>
      <p>
        <select class="manage-section">`;
    allStations.forEach(stationName => {
      ret += `<option>${stationName}</option>`;
    });

    ret += `</select>
        <input type="number" value="0" min="0" max="${routeStations.length}">
        <button class="register-section-button">등록</button>
        </p>
      <table>
          <tbody>
              <tr>
                  <th>순서</th>
                  <th>이름</th>
                  <th>설정</th>
              </tr>`;
    routeStations.forEach((stationName, idx) => {
      ret += `<tr><td>${idx}</td><td>${stationName}</td><td><button class="delete-route-station">노선에서 제거</button></td></tr>`;
    });
    ret += `</tbody></table>`;
    document.querySelector("#manage-section").innerHTML = ret;
  }
  changeStationsOrder() {
    let stationsIndex = document.querySelectorAll(`tr>td:first-child`);
    stationsIndex.forEach((item, idx) => {
      item.innerText = idx;
    });
  }
  decreaseMaxNumInInput() {
    let input = document.querySelector("input");
    input.max = Number(input.max) - 1;
  }
}
