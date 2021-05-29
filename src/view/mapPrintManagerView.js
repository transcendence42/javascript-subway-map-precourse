export default class MapView {
  constructor() {}
  showMap(lines) {
    let ret = `<div class="map"><ul>`;
    Object.keys(lines).forEach(key => {
      ret += `<li>${key}</li><ul>`;
      lines[key].forEach(item => {
        ret += `<li>${item}</li>`;
      });
      ret += `</ul>`;
    });
    ret += `</ul></div>`;
    document.querySelector("#show").innerHTML = ret;
  }
}
