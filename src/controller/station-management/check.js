import { errorMessage } from '../error-message.js';

export const checkValidStationName = (subwayStation, stationNameInput) => {
  if (subwayStation.get(stationNameInput)) {
    alert(errorMessage.stationDuplicate);
    return false;
  }
  if (stationNameInput.length < 2) {
    alert(errorMessage.stationLength);
    return false;
  }
  return true;
};
