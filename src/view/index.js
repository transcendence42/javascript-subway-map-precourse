import { stationRenderer } from './01-station/index.js';
import { lineRenderer } from './02-line/index.js';
import { sectionRenderer } from './03-section/index.js';
import { mapRenderer } from './04-map/index.js';

export const renderer = () => {
	stationRenderer();
	lineRenderer();
	sectionRenderer();
	mapRenderer();
}