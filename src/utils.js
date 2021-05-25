function addButtonEvent(submitButton, func) {
    submitButton.addEventListener('click', ()=>func());
}