import { storage } from '../../model/index.js';

const renderStation = stationNameInput => {
    document
      .querySelector('tbody')
      .insertAdjacentHTML(
        'beforeend',
        `<tr><td>${stationNameInput}</td><td><button id='stationDeleteButton'>삭제</button></td></tr>`,
      );
  };
  
export const renderStationManagement = () => {};
