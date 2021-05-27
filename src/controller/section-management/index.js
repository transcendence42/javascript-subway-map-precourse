import { addButtonEvent } from '../utils.js';
import { elementIds } from '../../utils.js';

const toggleSectionManagement = () => {
  elementIds.stationManagement.hidden = true;
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = !elementIds.sectionManagement.hidden;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
}

const selectSectionLineButton = (e) => {
  const lineName = e.currentTarget.dataset.line;
  
  console.log(lineName)
}

export const controlSectionManagement = () => {
  addButtonEvent(elementIds.sectionManagerButton, toggleSectionManagement);
  for (let item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
};
