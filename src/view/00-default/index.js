import { menuContainer } from './template.js';

const createMenuContainer = () => {
  document
    .getElementById('app')
    .insertAdjacentHTML(`beforeend`, menuContainer());
};

export const defaultRenderer = () => {
  createMenuContainer();
};
