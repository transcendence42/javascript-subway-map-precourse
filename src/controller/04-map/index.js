import { ID } from '../../constants/index.js';

const toggleMapPrintManagerButton = () => {
	const self = document.getElementById(ID.MAP_PRINT_MANAGER);
	if (self.hidden === false) {
		self.hidden = true;
		return;
	}
	self.hidden = false;
	document.getElementById(ID.STATION_MANAGER).hidden = true;
	document.getElementById(ID.LINE_MANAGER).hidden = true;
	document.getElementById(ID.SECTION_MANAGER).hidden = true;
}

const handleMapPrintManagerButton = () => {
	const sectionManagerButton = document.getElementById(ID.MAP_PRINT_MANAGER_BUTTON);
	sectionManagerButton.addEventListener('click', toggleMapPrintManagerButton);
}

export const mapPrintManager = () => {
	handleMapPrintManagerButton();
}
