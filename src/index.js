import { renderer } from './view/index.js';
import { controller } from './controller/index.js';

const subwayApp = () => {
	renderer();
	controller();
};

subwayApp();