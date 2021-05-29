import { Section } from '../constant.js';
import { renderSectionManager, renderSectionTable } from '../view/vsection.js';
import { addSection } from '../model/section.js';

function clickRegisterBtn() {
  const input = document.getElementById(Section.INPUT);
  const len = document.getElementById(Section.TABLE).childNodes.length;
  const s = document.getElementById(Section.SELECT);
  const choice = s.options[s.selectedIndex].value;
  if (input.value < 0 || input.value >= len) {
    alert('유효하지 않은 순서입니다.');
    input.value = '';
  } else {
    if (addSection(input.value, choice) == false) {
      alert('중복된 지하철 역은 등록할 수 없습니다.');
    } else {
      renderSectionTable(document.getElementById(Section.MANAGER).dataset.line);
    }
  }
}

export function constructSection() {
  const lines = localStorage.getItem('lines');
  if (lines === null) {
    return;
  }
  document.getElementById(Section.DIV).addEventListener('click', function (e) {
    const target = e.target;
    const action = target.dataset.action;
    if (action === 'showSectionManager') {
      renderSectionManager(target.dataset.id);
      const registerBtn = document.getElementById(Section.REGISTER);
      console.log(registerBtn);
      registerBtn.addEventListener('click', () => clickRegisterBtn());
    }
  });
}
