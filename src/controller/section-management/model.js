import { storage } from '../../model/index.js';

const findSubwayLineTag = () => {
  for (const item of storage.getLocalStorageMap('subway-line')) {
    if (
      item[0] === document.getElementsByTagName('h3')[1].innerHTML.slice(0, -3)
    ) {
      return item;
    }
  }
  return false;
};

const storeLineStation = ({ subwayLines, lineStation }) => {
  const lineName = document
    .getElementsByTagName('h3')[1]
    .innerHTML.slice(0, -3);
  subwayLines.set(lineName, lineStation);
  storage.setLocalStorageMap('subway-line', subwayLines);
};

export { findSubwayLineTag, storeLineStation };
