import { ID, NAME } from '../../constants/index.js';

export const menuContainer = () => {
	return `
	<div id='${ID.MENU_CONTAINER}'>
	  <button id='${ID.STATION_MANAGER_BUTTON}'>${NAME.STATION_MANAGER_BUTTON}</button>
	  <button id='${ID.LINE_MANAGER_BUTTON}'>${NAME.LINE_MANAGER_BUTTON}</button>
	  <button id='${ID.SECTION_MANAGER_BUTTON}'>${NAME.SECTION_MANAGER_BUTTON}</button>
	  <button id='${ID.MAP_PRINT_MANAGER_BUTTON}'>${NAME.MAP_PRINT_MANAGER_BUTTON}</button>
	</div>
	`;
  };