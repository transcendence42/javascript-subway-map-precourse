import {
	storeLocalStorage,
	loadLocalStorage
  } from '../utils/handle-storage.js';

  export const loadLineLocalStorage = () => {
	if (loadLocalStorage('lines') === null) {
	  let lines = [];
	  return lines;
	}
	return loadLocalStorage('lines');
  };

  export const addLineLocalStorage = (lineName) => {
	let lines = loadLineLocalStorage();
	if (lines === null) {
		lines = [];
	}
	lines.push(lineName);
	storeLocalStorage('lines', lines);
  };

  export const deleteLineLocalStorage = (lineName) => {
	let lines = loadLineLocalStorage();
	const target = stations.find((station) => {
	  return station.name === lineName;
	});
	lines.splice(lines.indexOf(target), 1);
	localStorage.removeItem('lines');
	storeLocalStorage('lines', stations)
  };
