import { elementIds } from '../../utils.js';
import { storage } from '../../model/index.js';

const addSelectOption = (element, value) => {
    let option = document.createElement('option');
    option.value = value;
    option.innerHTML = value;
    element.appendChild(option)    
}

const renderSelect = () => {
    console.log(storage.getLocalStorageMap())
    addSelectOption(elementIds.lineStartStationSelector, 'dog');
}

export const renderLineManagement = () => {
    renderSelect();
}