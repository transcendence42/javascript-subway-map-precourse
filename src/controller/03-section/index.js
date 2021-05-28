import { ID } from '../../constants/index.js';

const toggleSectionManagerButton = () => {
	const self = document.getElementById(ID.SECTION_MANAGER);
	if (self.hidden === false) {
		self.hidden = true;
		return;
	}
	self.hidden = false;
	document.getElementById(ID.STATION_MANAGER).hidden = true;
	document.getElementById(ID.LINE_MANAGER).hidden = true;
}

const handleSectionManagerButton = () => {
	const sectionManagerButton = document.getElementById(ID.SECTION_MANAGER_BUTTON);
	sectionManagerButton.addEventListener('click', toggleSectionManagerButton);
}

export const sectionManager = () => {
	handleSectionManagerButton();
}
