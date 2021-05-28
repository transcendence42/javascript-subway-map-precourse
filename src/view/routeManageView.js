export default class RouteManageView {
  constructor() {}
  showAllRoutes(stations, routes) {
    let ret = `<p><span>노선 이름</span></p>
      <p><input id="route-name" type="text" placeholder="노선 이름을 입력해주세요"></p>
      <p><span>상행 종점</span>
      <select name="upward-end-station" class="manage-route-page">`;
    stations.forEach(item => {
      ret += `<option>${item}</option>`;
    });
    ret += `</select>
      </p>
      <p><span>하행 종점</span>
      <select name="downward-end-station" class="manage-route-page">`;
    stations.forEach(item => {
      ret += `<option>${item}</option>`;
    });
    ret += `</select></p>
      <button id="add-route">노선 추가</button>
      <h2>지하철 노선 목록</h2>
      <table>
          <tbody>
          <tr>
                  <th>노선 이름</th>
                  <th>상행 종점역</th>
                  <th>하행 종점역</th>
                  <th>설정</th>
              </tr>`;
    Object.keys(routes).forEach(routeName => {
      let upwardEndStation = routes[routeName][0];
      let downwardEndStation = routes[routeName][1];
      ret += `<tr><td>${routeName}</td><td>${upwardEndStation}</td><td>${downwardEndStation}</td><td><button class="delete-route-btn">삭제</button></td></tr>`;
    });
    ret += `</tbody></table>`;
    document.querySelector("#show").innerHTML = ret;
  }
  addRouteToTable(routeName, upwardEndStation, downwardEndStation) {
    let tbody = document.querySelector("table>tbody");
    tbody.innerHTML += `<tr>
    <td>${routeName}</td><td>${upwardEndStation}</td><td>${downwardEndStation}</td><td><button class="delete-route-btn">삭제</button></td></tr>`;
  }
}
