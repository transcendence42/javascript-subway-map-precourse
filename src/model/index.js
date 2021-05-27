export const storage = {
  getLocalStorage: (key) => {
    return localStorage.getItem(key);
  },
  setLocalStorage: (key, value) => {
    localStorage.setItem(key, value);
  },
  getLocalStorageArray: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  setLocalStorageArray: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getLocalStorageMap: (key) => {
    return new Map(JSON.parse(localStorage.getItem(key)));
  },
  setLocalStorageMap: (key, value) => {
    localStorage.setItem(key, JSON.stringify([...value]));
  },
  removeLocalStorage: (key, value) => {
    const subwayStation = new Map(JSON.parse(localStorage.getItem(key)));
    subwayStation.delete(value);
    localStorage.setItem(key, JSON.stringify([...subwayStation]));
  },
  removeSectionStation: (lineName, station) => {
    const subwayStation = new Map(
      JSON.parse(localStorage.getItem('subway-line')),
    );
    let lineStations = subwayStation.get(lineName);
    if (lineStations.length <= 2) {
      return false;
    }
    lineStations.splice(lineStations.indexOf(station), 1);
    subwayStation.set(lineName, lineStations);
    localStorage.setItem('subway-line', JSON.stringify([...subwayStation]));
    return true;
  },
};
