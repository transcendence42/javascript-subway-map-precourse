import { rerenderSectionButtons } from '../section-management/index.js';
import { addLineLocalStorage, addLineList } from './model.js';
import { checkValidLineSelector } from './check.js';
import { deleteLine } from './delete-line.js';
import { storage } from '../../model/index.js';
import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';
import { initLineInput } from './init.js';
import { renderLine } from './view.js';

const addLineButtonEvent = (lineName) => {
  for (const item of document.querySelectorAll(
    `table[id=line-table] tbody tr td button`,
  )) {
    if (item.dataset.line === `${lineName}-button`) {
      addButtonEvent(item, deleteLine);
    }
  }
};

export const addLine = () => {
  const lineName = elementIds.lineNameInput.value;
  const lineStartStationSelectorValue =
    elementIds.lineStartStationSelector.value;
  const lineEndStationSelectorValue = elementIds.lineEndStationSelector.value;
  if (
    !checkValidLineSelector(
      lineStartStationSelectorValue,
      lineEndStationSelectorValue,
    )
  ) {
    return;
  }
  if (
    !addLineLocalStorage(
      lineStartStationSelectorValue,
      lineEndStationSelectorValue,
    )
  ) {
    return;
  }
  renderLine({
    lineName,
    lineStartStationSelectorValue,
    lineEndStationSelectorValue,
  });
  initLineInput();
  addLineList(lineStartStationSelectorValue, lineEndStationSelectorValue);
  addLineButtonEvent(lineName);
  rerenderSectionButtons();
  console.log(storage.getLocalStorageMap('subway-line'));
};
