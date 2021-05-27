
import { ID } from '../../constants/index.js';

const toggleLineManager = () => {
	document.getElementById(ID.STATION_MANAGER).hidden = true;
	document.getElementById(ID.LINE_MANAGER).hidden = false;
}

export const lineManager = () => {

	document.getElementById(ID.LINE_MANAGER_BUTTON).addEventListener('click', toggleLineManager);

}
