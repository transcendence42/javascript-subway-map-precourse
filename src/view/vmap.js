import { getLines } from '../model/line.js';
import { removeAllChildren } from '../utils.js';

export function getStationListsHtml(stations) {
  let ret = '<ul>';
  stations.forEach(function (station) {
    ret += `<li>${station}</li>`;
  });
  ret += '</ul>';
  return ret;
}

export function renderMap() {
  const lines = getLines();
  const mapPart = document.getElementById('#mapPart');

  removeAllChildren(mapPart);
  lines.map(function (line) {
    let content = `<h3 data-line="${line.name}">${line.name}</h3>`;
    content += getStationListsHtml(line.stations);
    mapPart.insertAdjacentHTML('beforeend', content);
  });
}
