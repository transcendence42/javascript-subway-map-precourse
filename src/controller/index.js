import { stationController } from './01-station/index.js';
import { lineController } from './02-line/index.js';
import { sectionController } from './03-section/index.js';
import { mapController } from './04-map/index.js';

export const controller = () => {
	stationController();
	lineController();
	sectionController();
	mapController();
}