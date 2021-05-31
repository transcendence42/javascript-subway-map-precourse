export const clearInput = (element) => {
  element.value = '';
  element.focus();
};

export const checkConfirm = (AlertMessage) => {
  return
  if (confirm(AlertMessage) == true)
    return true;
}