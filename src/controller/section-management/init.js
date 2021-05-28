import { elementIds } from '../../utils.js';

export const initSectionInput = (message) => {
  alert(message);
  elementIds.sectionOrderInput.value = '';
  elementIds.sectionOrderInput.focus();
};
