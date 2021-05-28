import { Line } from '../constant.js'
import { addLine } from '../model/line.js'
import { addLineTable } from '../view/vline.js'

function clickAddLine() {
    const newLine = document.getElementById(Line.INPUT).value;
    const start = document.getElementById(Line.START).value;
    const end = document.getElementById(Line.END).value;

    if (start === end ) {
        alert('상행 종점역과 하행 종점역이 같을 수 없습니다.');
    } else if (addLine(newLine, start, end) == false) {
        alert('중복된 지하철 노선 이름은 등록할 수 없습니다.');
    } else {
        addLineTable(newLine, start, end);
    }

}

export function constructLine() {
    const start = document.getElementById(Line.START);
    const end = document.getElementById(Line.END);
    const stations = JSON.parse(localStorage.getItem('stations'));
    const addBtn = document.getElementById(Line.ADDBTN);

    stations.forEach(station => {
        start.insertAdjacentHTML('beforeend', `<option value="${station}">${station}</option>`);
        end.insertAdjacentHTML('beforeend', `<option value="${station}">${station}</option>`);
    })
    addBtn.addEventListener('click', clickAddLine);
}