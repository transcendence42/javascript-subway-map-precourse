export const storeLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};

export const loadLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// 웹스토리지 사용법
// https://www.daleseo.com/js-web-storage/
