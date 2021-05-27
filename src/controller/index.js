import { stationManager } from './01-station/index.js';
import { lineManager } from './02-line/index.js';
import { sectionManager } from './03-section/index.js';
import { mapPrintManager } from './04-map/index.js';

export const controller = () => {
	stationManager();
	lineManager();
	sectionManager();
	mapPrintManager();
}