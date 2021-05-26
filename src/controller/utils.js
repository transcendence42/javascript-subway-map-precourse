export const addButtonEvent = (submitButton, func) => {
  submitButton.addEventListener('click', (e) => func(e));
};

export const removeButtonEvent = (submitButton, func) => {
  submitButton.removeEventListener('click', (e) => func(e));
};
