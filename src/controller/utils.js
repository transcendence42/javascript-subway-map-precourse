export const addButtonEvent = (submitButton, func) => {
  submitButton.addEventListener('click', () => func());
};

export const removeButtonEvent = (submitButton, func) => {
  submitButton.removeEventListener('click', () => func());
};
