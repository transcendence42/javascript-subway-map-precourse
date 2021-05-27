export default class StationManageView {
  makeHtml(stations) {
    let ret = `    <span><p>역 이름</p></span>\n    <input type="text" id="station-name-input"><button id="station-add-button">역 추가</button>\n    <h2>지하철 역 목록</h2>\n    <table>      <tr>\n        <th>역 이름</th>\n        <th>설정</th>\n      </tr>`;
    stations.forEach((item, idx) => {
      ret += `\n      <tr>\n        <td>${item}</td>\n        <td><button data-number=${idx}>삭제</button></td>\n      </tr>`;
    });
    ret += `\n    </table>`;
    return ret;
  }
}
