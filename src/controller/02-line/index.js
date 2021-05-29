import { handleLineManager } from './handle-manager.js';
import { handleLineAdd } from './handle-add.js';
import { handleLineDelete } from './handle-delete.js';

export const lineManager = () => {
  handleLineManager();
  handleLineAdd();
  handleLineDelete();
};
