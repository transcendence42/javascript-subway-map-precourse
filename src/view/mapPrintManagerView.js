export default class MapView {
  constructor() {}
  showMap(routes) {
    let ret = `<div class="map"><ul>`;
    Object.keys(routes).forEach(key => {
      ret += `<li>${key}</li><ul>`;
      routes[key].forEach(item => {
        ret += `<li>${item}</li>`;
      });
      ret += `</ul>`;
    });
    ret += `</ul></div>`;
    document.querySelector("#show").innerHTML = ret;
  }
}
