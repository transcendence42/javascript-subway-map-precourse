import { Line } from '../constant.js';
import { removeAllChildren } from '../utils.js';

export function addLineTable(newLine, start, end) {
  const table = document.getElementById(Line.TABLE);
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
        <td style="border:1px solid;">${newLine}</td>
        <td style="border:1px solid;">${start}</td>
        <td style="border:1px solid;">${end}</td>
        <td style="border:1px solid;">
        <button data-id="${newLine}" data-action="deleteLine">삭제</button>
        </td>
        </tr>`,
  );
}

export function renderLineTable() {
  const lines = JSON.parse(localStorage.getItem('lines'));
  const table = document.getElementById(Line.TABLE);
  if (lines) {
    removeAllChildren(table);
    removeAllChildren(document.getElementById(Line.START));
    removeAllChildren(document.getElementById(Line.END));
    table.insertAdjacentHTML('afterbegin', Line.TH);
    lines.forEach((line) => {
      table.insertAdjacentHTML(
        'beforeend',
        `<tr>
        <td style="border:1px solid;">${line.name}</td>
        <td style="border:1px solid;">${line.start}</td>
        <td style="border:1px solid;">${line.end}</td>
        <td style="border:1px solid;">
        <button data-id="${line.name}" data-action="deleteLine">삭제</button>
        </td>
        </tr>`,
      );
    });
  }
}
