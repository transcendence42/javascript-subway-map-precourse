export default class RouteManageView {
  constructor() {}
  showAllRoutes() {
    let template = `<p><span>노선 이름</span></p>
      <p><input type="text" placeholder="노선 이름을 입력해주세요"></p>
      <p><span>상행 종점</span><select name="upward-last-station">
      <option>인천</option>
      <option>소요산</option>
          </select></p>
      <p><span>하행 종점</span><select name="downward-last-station">
      <option>인천</option>
      <option>소요산</option>
          </select></p>
      <button>노선 추가</button>
      <h2>지하철 노선 목록</h2>
      <table>
          <tbody>
              <tr>
                  <th>노선 이름</th>
                  <th>상행 종점역</th>
                  <th>하행 종점역</th>
                  <th>설정</th>
              </tr>
              <tr>
                  <td>1호선</td>
                  <td>인천</td>
                  <td>소요산</td>
                  <td><button>삭제</button></td>
              </tr>
          </tbody>
      </table>`;
    document.querySelector("#show").innerHTML = template;
  }
}
