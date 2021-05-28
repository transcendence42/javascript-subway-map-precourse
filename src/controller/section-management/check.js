import { errorMessage } from '../error-message.js';
import { initSectionInput } from './init.js';

const checkValidInput = (stationLength, sectionOrderInputValue) => {
  return stationLength >= sectionOrderInputValue && sectionOrderInputValue >= 0;
};

const checkValidOption = (lineStation, sectionStationOption) => {
  return !lineStation.includes(sectionStationOption);
};

export const checkValidValue = ({
  lineStation,
  sectionOrderInputValue,
  sectionStationOption,
}) => {
  if (!checkValidInput(lineStation.length, Number(sectionOrderInputValue))) {
    initSectionInput(errorMessage.sectionInvalidRangeInput);
    return false;
  }
  if (!checkValidOption(lineStation, sectionStationOption)) {
    initSectionInput(errorMessage.sectionInvalidOption);
    return false;
  }
  return true;
};
