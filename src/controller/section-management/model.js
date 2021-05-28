import { storage } from '../../model/index.js';

export const findSubwayLineTag = () => {
  for (let item of storage.getLocalStorageMap('subway-line')) {
    if (
      item[0] === document.getElementsByTagName('h3')[1].innerHTML.slice(0, -3)
    ) {
      return item;
    }
  }
  return;
};

export const storeLineStation = ({ subwayLines, lineStation }) => {
  let lineName = document.getElementsByTagName('h3')[1].innerHTML.slice(0, -3);
  subwayLines.set(lineName, lineStation);
  storage.setLocalStorageMap('subway-line', subwayLines);
};
