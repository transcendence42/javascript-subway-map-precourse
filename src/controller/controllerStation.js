import { Station as S } from '../constant.js'
import { addStation, deleteStation } from '../model/station.js'
import { addStationTable, removeStationTable } from '../view/viewStation.js'


export function clickAddStation() {
  const newStation = document.getElementById(S.INPUT).value;
  if (newStation.length < 2) {
    document.getElementById(S.INPUT).value = '';
    alert ('지하철 역은 2글자 이상이어야 합니다.');
  } else {
    if (addStation(newStation) == false){
      document.getElementById(S.INPUT).value = '';
      alert ('중복된 지하철 역 이름은 등록할 수 없습니다.');
    } else {
      addStationTable(newStation);
    }
  }
}

export function constructStation() {
  document
  .getElementById(S.TABLE)
  .addEventListener('click', function (e) {
    const target = e.target
    const action = target.dataset.action;

    console.log(target.dataset.id);

    if (action === "deleteStation") {
      removeStationTable(target.closest('tr'));
      deleteStation(target.dataset.id);
    } 
  })
}
