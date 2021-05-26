import { elementIds } from '../../utils.js';
import { storage } from '../../model/index.js';

const addSelectOption = (element, value) => {
    let option = document.createElement('option');
    option.value = value;
    option.innerHTML = value;
    element.appendChild(option)    
}

const renderSelect = () => {
    for (let item of storage.getLocalStorageMap('subway-station')) {
        addSelectOption(elementIds.lineStartStationSelector, item[0]);
    }
    for (let item of storage.getLocalStorageMap('subway-station')) {
        addSelectOption(elementIds.lineEndStationSelector, item[0]);
    }
}

export const renderLineManagement = () => {
    renderSelect();
}