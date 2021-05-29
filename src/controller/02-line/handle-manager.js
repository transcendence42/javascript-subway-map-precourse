import { ID } from '../../constants/index.js';

const toggleLineManagerButton = () => {
	const self = document.getElementById(ID.LINE_MANAGER);
	if (self.hidden === false) {
		self.hidden = true;
		return;
	}
	self.hidden = false;
	document.getElementById(ID.STATION_MANAGER).hidden = true;
	// document.getElementById(ID.SECTION_MANAGER).hidden = true;
	// document.getElementById(ID.MAP_PRINT_MANAGER).hidden = true;
}

export const handleLineManager = () => {
	const lineManagerButton = document.getElementById(ID.LINE_MANAGER_BUTTON);
	lineManagerButton.addEventListener('click', toggleLineManagerButton);
}
