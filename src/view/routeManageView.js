export default class RouteManageView {
  constructor() {}
  showAllRoutes() {
    let template = `<p><span>노선 이름</span></p>
      <p><input type="text" placeholder="노선 이름을 입력해주세요"></p>
      <p><span>상행 종점</span><select name="upward-last-station">
      <option>학생</option>
      <option>회사원</option>
      <option>기타</option>
          </select></p>
      <p><span>하행 종점</span><select name="downward-last-station">
      <option>학생</option>
      <option>회사원</option>
      <option>기타</option>
          </select></p>
      <button>노선 추가</button>
      <h2>지하철 노선 목록</h2>
      <table>
          <tbody>
              <tr>
                  <th>th</th>
                  <th>th</th>
                  <th>th</th>
              </tr>
              <tr>
                  <td>td</td>
                  <td>td</td>
                  <td>td</td>
              </tr>
          </tbody>
      </table>`;
    document.querySelector("#show").innerHTML = template;
  }
}
