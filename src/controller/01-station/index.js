import { ID } from '../../constants/index.js';

const toggleStationManager = () => {
	const self = document.getElementById(ID.STATION_MANAGER);

	if (self.hidden === false) {
		self.hidden = true;
		return;
	}
	self.hidden = false;
	document.getElementById(ID.LINE_MANAGER).hidden = true;
}

export const stationManager = () => {
	document.getElementById(ID.STATION_MANAGER_BUTTON).addEventListener('click', toggleStationManager);
}