export const checkStationNameValid = (stationName) => {
	if (stationName.length < 2) {
	  alert('역 이름을 2글자 이상 입력하세요');
	  return false;
	}
	return true;
  };