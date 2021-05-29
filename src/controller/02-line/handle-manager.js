import { ID } from '../../constants/index.js';
import { lineRenderer } from '../../view/02-line/index.js';
import { loadStationLocalStorage } from '../../model/01-station/index.js';

const toggleLineManagerButton = () => {
  const self = document.getElementById(ID.LINE_MANAGER);
  if (self.hidden === false) {
    self.hidden = true;
    return;
  }
  self.hidden = false;
  document.getElementById(ID.LINE_NAME_INPUT).focus();
  document.getElementById(ID.STATION_MANAGER).hidden = true;
  // document.getElementById(ID.SECTION_MANAGER).hidden = true;
  // document.getElementById(ID.MAP_PRINT_MANAGER).hidden = true;
};

export const addLineSelectOption = (element, value) => {
  const option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;
  element.appendChild(option);
};

const setLineStationSelector = () => {
  for (const name of loadStationLocalStorage().map((x) => {
    return x.name;
  })) {
    addLineSelectOption(
      document.getElementById(ID.LINE_START_STATION_SELECTOR),
      name,
    );
    addLineSelectOption(
      document.getElementById(ID.LINE_END_STATION_SELECTOR),
      name,
    );
  }
};

export const handleLineManager = () => {
  setLineStationSelector();
  const lineManagerButton = document.getElementById(ID.LINE_MANAGER_BUTTON);
  lineManagerButton.addEventListener('click', toggleLineManagerButton);
};
