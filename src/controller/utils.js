export const addButtonEvent = (submitButton, func) => {
  submitButton.addEventListener('click', () => func());
};
