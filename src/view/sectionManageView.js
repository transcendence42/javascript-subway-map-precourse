export default class SectionManageView {
  constructor() {}
  showAllRoutes(routeList) {
    let ret = `   <h2>구간을 선택할 노선을 선택해주세요.</h2><ul class="section-page">`;
    routeList.forEach(routeName => {
      ret += `<li><button>${routeName}</button></li>`;
    });
    ret += `</ul>`;
    document.querySelector("#show").innerHTML = ret;
  }
}
