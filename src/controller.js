function getButtons() {
  return {
    stationPart: document.getElementById('#stationPart'),
    linePart: document.getElementById('#linePart'),
    sectionPart: document.getElementById('#sectionPart'),
    mapPart: document.getElementById('#mapPart')
  };
}

function showElem(elem) {
  elem.style.display = 'block';
}

function hideElem(elem) {
  elem.style.display = 'none';
}

// show 함수들이 다 내부적으로 비슷한데 효율적으로 만들 방법은 없었을까?
// getButtons를 매번 해오지 않을 방법은? object 다른 파일에서 import 해서 쓰는 건 잘 작동하지 않았다.
// 초기에 id가 설정이 안돼있었기 때문일까?

function showStationPart() {
  const Buttons = getButtons();
  showElem(Buttons.stationPart);
  hideElem(Buttons.linePart);
  hideElem(Buttons.sectionPart);
  hideElem(Buttons.mapPart);
}

function showLinePart() {
  const Buttons = getButtons();
  hideElem(Buttons.stationPart);
  showElem(Buttons.linePart);
  hideElem(Buttons.sectionPart);
  hideElem(Buttons.mapPart);
}

function showSectionPart() {
  const Buttons = getButtons();
  hideElem(Buttons.stationPart);
  hideElem(Buttons.linePart);
  showElem(Buttons.sectionPart);
  hideElem(Buttons.mapPart);
}

function showMapPart() {
  const Buttons = getButtons();
  hideElem(Buttons.stationPart);
  hideElem(Buttons.linePart);
  hideElem(Buttons.sectionPart);
  showElem(Buttons.mapPart);
}

function constructor() {
  const stationBtn = document.getElementById('#station-manager-button');
  const lineBtn = document.getElementById('#line-manager-button');
  const sectionBtn = document.getElementById('#section-manager-button');
  const mapBtn = document.getElementById('#map-print-manager-button');

  stationBtn.addEventListener('click', showStationPart);
  lineBtn.addEventListener('click', showLinePart);
  sectionBtn.addEventListener('click', showSectionPart);
  mapBtn.addEventListener('click', showMapPart);
}

export default function controller() {
  constructor();
}
