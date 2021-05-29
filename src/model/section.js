import { Section } from '../constant.js';
export function addSection(input, choice) {
  const line = document.getElementById(Section.MANAGER).dataset.line;
  let linesObj = JSON.parse(localStorage.getItem('lines'));
  const obj = linesObj.filter((item) => item.name === line)[0].stations;

  if (obj.includes(choice) == true) {
    return false;
  }
  obj.splice(input, 0, choice);
  linesObj = linesObj.filter((item) => item.name !== line);
  linesObj.push({ name: line, stations: obj });
  localStorage.setItem('lines', JSON.stringify(linesObj));
  return true;
}
