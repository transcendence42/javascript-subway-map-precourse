import { elementIds, addButtonEvent } from '../utils.js';

const toggleDisplayStationManagement = () => {
  elementIds.stationManagement.hidden = !(elementIds.stationManagement.hidden);
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
}

const addStationLocalStorage = () => {
  if (!localStorage.getItem('subway-station')) {
    localStorage.setItem('subway-station', JSON.stringify([...new Map()]));
  }
  const subwayStation = new Map(JSON.parse(localStorage.getItem('subway-station')));
  if (subwayStation.get(elementIds.stationNameInput.value)) {
    alert('중복');
  } else {
    subwayStation.set(elementIds.stationNameInput.value, [])
  }
  localStorage.setItem('subway-station', JSON.stringify([...subwayStation]));
  console.log(localStorage.getItem('subway-station'));
}

{/* <tr>
<td>John</td>
<td>Doe</td>
</tr> */}
{/* <button class="station-delete-button">삭제</button>         */}

export const controlStationManagement = () => {
  addButtonEvent(elementIds.stationManagerButton, toggleDisplayStationManagement);
  addButtonEvent(elementIds.stationAddButton, addStationLocalStorage);
};
