export const ERROR_CODE = {
  SUCCESS: 0,
  EMPTY_STATION_NAME: 1,
  WRONG_STATION_NAME: 2,
  STATION_NAME_DUP: 3,
  STATION_IN_ROUTE: 4
};

export const ERROR_CODE_MSG = {
  1: "역 이름이 비어있습니다.",
  2: "역 이름이 잘못되었습니다.",
  3: "역 이름이 중복됩니다.",
  4: "해당 역이 노선에 등록되어 있습니다."
};
