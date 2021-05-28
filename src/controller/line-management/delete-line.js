import { rerenderSectionButtons } from '../section-management/index.js';
import { storage } from '../../model/index.js';

export const deleteLine = (e) => {
  const dataLine = e.currentTarget.dataset.line.slice(0, -7);
  for (let item of document.querySelectorAll(`table[id=line-table] tbody tr`)) {
    if (item.dataset.line === dataLine) {
      storage.removeLocalStorage('subway-line', item.dataset.line);
      item.remove();
    }
  }
  removeEventListener(e.currentTarget, deleteLine);
  rerenderSectionButtons();
};
