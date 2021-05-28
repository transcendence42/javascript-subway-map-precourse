import { renderLineManagementTable, renderSectionTable } from './view.js';
import { findSubwayLineTag, storeLineStation } from './model.js';
import { storage } from '../../model/index.js';
import { checkValidValue } from './check.js';
import { elementIds } from '../../utils.js';

const addLineStation = ({ sectionOrderInputValue, sectionStationOption }) => {
  const subwayLines = storage.getLocalStorageMap('subway-line');
  const lineName = document
    .getElementsByTagName('h3')[1]
    .innerHTML.slice(0, -3);
  let lineStation = subwayLines.get(lineName);

  lineStation.splice(sectionOrderInputValue, 0, sectionStationOption);
  renderSectionTable(lineStation);
  storeLineStation({ subwayLines, lineStation });
};

export const addSectionLineStation = () => {
  let subwayLine;
  const sectionOrderInputValue = elementIds.sectionOrderInput.value;
  const sectionStationOption = elementIds.sectionStationSelector.value;

  subwayLine = findSubwayLineTag();
  if (
    !checkValidValue({
      lineStation: subwayLine[1],
      sectionOrderInputValue,
      sectionStationOption,
    })
  ) {
    return;
  }
  addLineStation({ sectionOrderInputValue, sectionStationOption });
  renderLineManagementTable();
};
