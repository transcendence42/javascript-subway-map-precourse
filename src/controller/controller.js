import { MainButtons, Station } from '../constant.js';
import { renderStationTable } from '../view/vstation.js';
import { renderLineTable } from '../view/vline.js';
import { renderLineButtons } from '../view/vsection.js';
import { renderMap } from '../view/vmap.js';
import { constructStation } from './cstation.js';
import { constructLine } from './cline.js';
import { constructSection } from './csection.js';


function getParts() {
  return {
    stationPart: document.getElementById('#stationPart'),
    linePart: document.getElementById('#linePart'),
    sectionPart: document.getElementById('#sectionPart'),
    mapPart: document.getElementById('#mapPart'),
  };
}

function showElem(elem) {
  elem.style.display = 'block';
}

function hideElem(elem) {
  elem.style.display = 'none';
}

// show 함수들이 다 내부적으로 비슷한데 효율적으로 만들 방법은 없었을까?
// getParts를 매번 해오지 않을 방법은? object 다른 파일에서 import 해서 쓰는 건 잘 작동하지 않았다.
// 초기에 id가 설정이 안돼있었기 때문일까?

function showStationPart() {
  const Parts = getParts();
  showElem(Parts.stationPart);
  hideElem(Parts.linePart);
  hideElem(Parts.sectionPart);
  hideElem(Parts.mapPart);
  renderStationTable();
}

function showLinePart() {
  const Parts = getParts();
  hideElem(Parts.stationPart);
  showElem(Parts.linePart);
  hideElem(Parts.sectionPart);
  hideElem(Parts.mapPart);
  renderLineTable();  
}

function showSectionPart() {
  const Parts = getParts();
  hideElem(Parts.stationPart);
  hideElem(Parts.linePart);
  showElem(Parts.sectionPart);
  hideElem(Parts.mapPart);
  renderLineButtons();
}

function showMapPart() {
  const Parts = getParts();
  hideElem(Parts.stationPart);
  hideElem(Parts.linePart);
  hideElem(Parts.sectionPart);
  showElem(Parts.mapPart);
  renderMap();
}

function constructor() {
  document
    .getElementById('#menu-buttons')
    .addEventListener('click', (e) => {
      if (e.target.id === MainButtons.STATION) {
        showStationPart();
      } else if (e.target.id === MainButtons.LINE) {
        showLinePart();
      } else if (e.target.id === MainButtons.SECTION) {
        showSectionPart();
      } else if (e.target.id === MainButtons.MAP) {
        showMapPart();
      }
    });
}

export default function controller() {
  constructor();
  constructStation();
  constructLine();
  constructSection();
}
