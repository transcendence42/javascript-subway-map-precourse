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
  showManageSection(routeName, routeStations, stationsExceptRouteStations) {
    let ret = `<h2>${routeName} 관리</h2>
      <h3>구간 등록</h3>
      <p>
        <select>`;
    stationsExceptRouteStations.forEach(stationName => {
      ret += `<option>${stationName}</option>`;
    });
    ret += `</select>
        <input type="number" min="0" max="${routeStations.length}">
        <button>등록</button>
      </p>
      <table>
          <tbody>
              <tr>
                  <th>순서</th>
                  <th>이름</th>
                  <th>설정</th>
              </tr>`;
    routeStations.forEach((stationName, idx) => {
      ret += `<tr><td>${idx}</td><td>${stationName}</td><td><button>노선에서 제거</button></td></tr>`;
    });
    ret += `</tbody></table>`;
    document.querySelector("#manage-section").innerHTML = ret;
  }
}
