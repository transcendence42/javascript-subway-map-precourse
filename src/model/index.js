export const storage = {
  getLocalStorage: (key) => {
    return localStorage.getItem(key);
  },
  setLocalStorage: (key, value) => {
    localStorage.setItem(key, value);
  },
  getLocalStorageMap: (key) => {
    return new Map(JSON.parse(localStorage.getItem(key)));
  },
  setLocalStorageMap: (key, value) => {
    localStorage.setItem(key, JSON.stringify([...value]));
  },
  removeLocalStorageStation: (value) => {
    const subwayStation = new Map(
      JSON.parse(localStorage.getItem('subway-station')),
    );
    subwayStation.delete(value);
    localStorage.setItem('subway-station', JSON.stringify([...subwayStation]));
  },
};
