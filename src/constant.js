export const Message = {};

export const MainButtons = {
  STATION: '#station-manager-button',
  LINE: '#line-manager-button',
  SECTION: '#section-manager-button',
  MAP: '#map-print-manager-button',
};

export const Station = {
  DIV: '#stationPart',
  INPUT: '#station-name-input',
  ADDBTN: '#station-add-button',
  DELETEBTN: '.station-delete-button',
  TABLE: '#station-table',
  TH: `<th style="border: 1px solid"><strong>역 이름</strong></th>
  <th style="border: 1px solid"><strong>설정</strong></th>`,
};

export const Line = {
  DIV: '#linePart',
  INPUT: '#line-name-input',
  START: '#line-start-station-selector',
  END: '#line-end-station-selector',
  ADDBTN: '#line-add-button',
  TABLE: '#line-table',
  TH: `<th style="border: 1px solid"><strong>노선 이름</strong></th>
  <th style="border: 1px solid"><strong>상행 종점역</strong></th>
  <th style="border: 1px solid"><strong>하행 종점역</strong></th>
  <th style="border: 1px solid"><strong>설정</strong></th>`,
};
