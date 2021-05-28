import { Section } from '../constant.js'
export function addSection(input) {
    const line = document.getElementById(Section.MANAGER).dataset.line;
    let linesObj = JSON.parse(localStorage.getItem('lines'));
    const obj = linesObj.filter(item => item.name === line)[0].stations;
    const s = document.getElementById(Section.SELECT);
    const choice = s.options[s.selectedIndex].value; 

    linesObj = linesObj.filter(item=> item.name !== line);
    obj.splice(input, 0, choice);
    linesObj.push(obj);
    console.log({name: line, stations: linesObj})
    //localStorage.setItem('lines', JSON.stringify({name:line, lines: linesObj}));
}