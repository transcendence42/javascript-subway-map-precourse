import { Station as S } from '../constant.js';
import { addStation, deleteStation } from '../model/station.js';
import { addStationTable, removeStationTable } from '../view/vstation.js';

export function clickAddStation() {
  const newStation = document.getElementById(S.INPUT).value;
  if (newStation.length < 2) {
    document.getElementById(S.INPUT).value = '';
    alert('지하철 역은 2글자 이상이어야 합니다.');
  } else {
    document.getElementById(S.INPUT).value = '';
    if (addStation(newStation) == false) {
      alert('중복된 지하철 역 이름은 등록할 수 없습니다.');
    } else {
      addStationTable(newStation);
    }
  }
}

export function constructStation() {
  const stationAddButton = document.getElementById(S.ADDBTN);
  stationAddButton.addEventListener('click', clickAddStation);
  document.getElementById(S.TABLE).addEventListener('click', (e) => {
    const target = e.target;
    const action = target.dataset.action;
    if (action === 'deleteStation') {
      if (deleteStation(target.dataset.id) === false) {
        alert('노선에 포함된 역은 삭제할 수 없습니다.');
        document.getElementById(S.INPUT).value = '';
      } else {
        removeStationTable(target.closest('tbody'));
      }
    }
  });
}
