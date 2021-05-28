import { renderSectionManagement } from '../../view/section-management/index.js';
import { elementIds, removeChildAllElements } from '../../utils.js';
import { addSectionLineStation } from './add-section-station.js';
import { toggleDisplay } from './toggle-display.js';
import { selectSectionLineButton } from './select-section.js';
import { addButtonEvent } from '../utils.js';

const rerenderSectionButtons = () => {
  removeChildAllElements(elementIds.sectionButtons);
  renderSectionManagement();
  for (const item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
};

const controlSectionManagement = () => {
  addButtonEvent(elementIds.sectionManagerButton, toggleDisplay);
  for (const item of elementIds.sectionLineMenuButton) {
    addButtonEvent(item, selectSectionLineButton);
  }
  addButtonEvent(elementIds.sectionAddButton, addSectionLineStation);
};

export { rerenderSectionButtons, controlSectionManagement };
