import { storage } from '../../model/index.js';
import { elementIds } from '../../utils.js';

export const renderMapFrame = () => {
  elementIds.sectionManagement.insertAdjacentHTML(
    'afterend',
    `<div class="map"></div>`,
  );
};

const addStationName = (stationNames) => {
  let ulTag = document.createElement('ul');
  for (let stationName of stationNames) {
    ulTag.innerHTML += `<li>${stationName}</li>`;
  }
  return ulTag;
};

const addLineName = (lineName, stationNames) => {
  let h2Tag = document.createElement('h2');
  h2Tag.innerHTML = lineName;
  return h2Tag;
};

const renderMap = () => {
  for (let [lineName, stationNames] of storage.getLocalStorageArray(
    'subway-line',
  )) {
    document
      .getElementsByClassName('map')[0]
      .insertAdjacentElement('beforeend', addLineName(lineName, stationNames));
    document
      .querySelectorAll(`.map h2`)
      [document.querySelectorAll(`.map h2`).length - 1].insertAdjacentElement(
        'afterend',
        addStationName(stationNames),
      );
  }
};

export const renderSubwayRouteMap = () => {
  renderMap();
};
