export const storage = {
  getLocalStorage: key => {
    return localStorage.getItem(key);
  },
  setLocalStorage: (key, value) => {
    localStorage.setItem(key, value);
  },
  getLocalStorageMap: key => {
    return new Map(JSON.parse(localStorage.getItem('subway-station')));
  },
  setLocalStorageMap: (key, value) => {
    localStorage.setItem(key, JSON.stringify([...value]));
  }
};
