import { ID } from '../../constants/index.js';

const buttonEvent = () => {
	console.log('hi')

	document.getElementById(ID.STATION_MANAGER).hidden = false;
	document.getElementById(ID.LINE_MANAGER).hidden = true;
}

export const stationManager = () => {
	document.getElementById(ID.STATION_MANAGER_BUTTON).addEventListener('click', buttonEvent);
}