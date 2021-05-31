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

  export const addLineLocalStorage = (lineName, startStation, endStation) => {
	let lines = loadLineLocalStorage();
	if (lines === null) {
		lines = [];
	}
	lines.push({ line: lineName, stations: [startStation, endStation]});
	storeLocalStorage('lines', lines);
  };

  export const deleteLineLocalStorage = (lineName) => {
	let lines = loadLineLocalStorage();
	const target = lines.find((item) => {
	  return item.line === lineName;
	});
	lines.splice(lines.indexOf(target), 1);
	localStorage.removeItem('lines');
	storeLocalStorage('lines', lines)
  };
