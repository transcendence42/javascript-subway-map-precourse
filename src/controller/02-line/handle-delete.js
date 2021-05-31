import { ID, CLASS, ALERT } from '../../constants/index.js';
import { deleteLineListTableTbody } from '../../view/02-line/index.js';
import { deleteLineLocalStorage } from '../../model/02-line/index.js';

export const setEventLineDeleteButton = () => {
  const deleteButtonClasses = document.getElementsByClassName(
    CLASS.LINE_DELETE_BUTTON,
  );
  const index = deleteButtonClasses.length - 1;
  deleteButtonClasses[index].addEventListener('click', () =>
    deleteLine(deleteButtonClasses[index]),
  );
};

export const deleteLine = (target) => {
  if (confirm(ALERT.LINE_DELETE_CHECK)) {
    const lineName = target.closest('tr').getElementsByTagName('td')[0].innerText;
    deleteLineListTableTbody(target);
    deleteLineLocalStorage(lineName);
  }
};

export const handleLineDelete = () => {
  for (const target of document.getElementsByClassName(
    CLASS.LINE_DELETE_BUTTON,
  )) {
    target.addEventListener('click', () => deleteLine(target));
  }
};
