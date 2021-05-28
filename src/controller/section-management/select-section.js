import { renderSelect, renderSelectionRegister } from './view.js';

export const selectSectionLineButton = (e) => {
  const lineName = e.currentTarget.dataset.line;
  renderSelectionRegister(lineName);
  renderSelect(lineName);
};
