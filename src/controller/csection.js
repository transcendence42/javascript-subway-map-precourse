import { Section } from '../constant.js'
import { renderSectionManager } from '../view/vsection.js'
import { addSection } from '../model/section.js';

function clickRegisterBtn() {
    const input = document.getElementById(Section.INPUT);
    const len = document.getElementById(Section.TABLE).childNodes.length;
    console.log(input.value, len)
    if (input.value <= 0 || input.value >= len) {
        alert('유효하지 않은 순서입니다.');
        input.value = '';
    } else {
        addSection(input.value);
    }
}


export function constructSection() {
    const lines = localStorage.getItem('lines');
    if (lines === null) {
        return ;
    }
    document.getElementById(Section.DIV).addEventListener('click', function (e) {
        const target = e.target;
        const action = target.dataset.action;
        if (action === 'showSectionManager'){
            renderSectionManager(target.dataset.id);
            const registerBtn = document.getElementById(Section.REGISTER);
            console.log(registerBtn);
            registerBtn.addEventListener('click', () => clickRegisterBtn());
        }
    })
}