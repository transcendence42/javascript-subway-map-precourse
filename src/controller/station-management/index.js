import { elementIds, addButtonEvent } from '../utils.js';
import { errorMessage } from '../error-message.js'

const toggleDisplayStationManagement = () => {
  elementIds.stationManagement.hidden = !(elementIds.stationManagement.hidden);
  elementIds.lineManagement.hidden = true;
  elementIds.sectionManagement.hidden = true;
  if (elementIds.mapPrintManagement) {
    elementIds.mapPrintManagement.hidden = true;
  }
}

const addStationLocalStorage = () => {
  const stationNameInput = elementIds.stationNameInput.value;
  if (!localStorage.getItem('subway-station')) {
    localStorage.setItem('subway-station', JSON.stringify([...new Map()]));
  }
  const subwayStation = new Map(JSON.parse(localStorage.getItem('subway-station')));
  if (subwayStation.get(stationNameInput)) {
    alert(errorMessage.stationDuplicate);
  } else if (stationNameInput.length < 2) {
    alert(errorMessage.stationLength);
  } else {
    subwayStation.set(stationNameInput, [])
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
