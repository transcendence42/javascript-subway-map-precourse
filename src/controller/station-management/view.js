import { elementIds } from '../../utils.js';

export const addSelectOption = (element, value) => {
  let option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;
  element.appendChild(option);
};

export const renderAddStation = (stationNameInput) => {
  elementIds.stationTableTbody.insertAdjacentHTML(
    'beforeend',
    `<tr data-station=\'${stationNameInput}\'><td>${stationNameInput}</td><td><button class='station-delete-button' data-station=\'${stationNameInput}-button\'>삭제</button></td></tr>`,
  );
};
