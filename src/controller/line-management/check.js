import { errorMessage } from '../error-message.js';

export const checkValidLineSelector = (
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
) => {
  if (lineStartStationSelectorValue === lineEndStationSelectorValue) {
    alert(errorMessage.stationDuplicate);
    return false;
  }
  return true;
};
