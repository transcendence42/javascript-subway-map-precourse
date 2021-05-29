export const ERROR_CODE = {
  SUCCESS: 0,
  EMPTY_LINE_NAME: 1,
  WRONG_LINE_NAME: 2,
  EQUAL_UPWARD_AND_DOWNWARD: 3,
  LINE_NAME_DUP: 4
};

export const ERROR_CODE_MSG = {
  1: "노선 이름이 비어있습니다.",
  2: "노선 이름이 잘못되었습니다.",
  3: "상행 종점과 하행 종점이 같습니다.",
  4: "노선 이름이 중복됩니다."
};
