export default function addButtonEvent(submitButton, func) {
    submitButton.addEventListener('click', ()=>func());
}

export const elementIds = {
    stationManagement: document.getElementById('station-management')
}