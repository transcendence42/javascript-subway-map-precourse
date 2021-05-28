import { elementIds } from '../../utils.js';

const addLineTable = ({
  lineName,
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
}) => {
  return `<tr data-line='${lineName}'>
            <td>${lineName}</td>
            <td>${lineStartStationSelectorValue}</td>
            <td>${lineEndStationSelectorValue}</td>
            <td>
                <button class='line-delete-button' data-line='${lineName}-button'>삭제</button>
            </td>
        </tr>`;
};

export const renderLine = ({
  lineName,
  lineStartStationSelectorValue,
  lineEndStationSelectorValue,
}) => {
  let result = '';
  result += addLineTable({
    lineName,
    lineStartStationSelectorValue,
    lineEndStationSelectorValue,
  });
  elementIds.lineTableTbody.insertAdjacentHTML('beforeend', result);
};
