import { Section } from '../constant.js';
import { renderSectionManager, renderSectionTable } from '../view/vsection.js';
import { addSection, deleteSection } from '../model/section.js';

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

function clickDeleteBtn(e) {
  const target = e.target;
  const line = e.target.dataset.line;
  const station = e.target.dataset.value;

  if (target.className === Section.DELETEBTN) {
    if (deleteSection(line, station) === false) {
      alert('노선 내 역은 두개 이상이어야 합니다.');
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
      document
        .getElementById(Section.REGISTER)
        .addEventListener('click', () => clickRegisterBtn());
      document
        .getElementById(Section.TABLE)
        .addEventListener('click', (e) => clickDeleteBtn(e));
    }
  });
}
