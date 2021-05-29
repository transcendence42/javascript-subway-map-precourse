export function addStation(newStation) {
  let oldStations = localStorage.getItem('stations');
  if (oldStations === null) {
    localStorage.setItem('stations', JSON.stringify([newStation]));
    return true;
  } else {
    let stations = JSON.parse(oldStations);
    if (stations.includes(newStation) === false) {
      stations.push(newStation);
      localStorage.setItem('stations', JSON.stringify(stations));
      return true;
    }
    return false;
  }
}

function checkLineIncludedStation(lines, station) {
  let ret = lines.every((line) => {
    if (
      line.stations.filter((item) => item !== station).length !=
      line.stations.length
    ) {
      return false;
    } else {
      return true;
    }
  });
  return ret;
}

export function deleteStation(station) {
  let oldStations = JSON.parse(localStorage.getItem('stations'));
  let lines = JSON.parse(localStorage.getItem('lines'));

  if (checkLineIncludedStation(lines, station) === false) {
    return false;
  } else {
    const stations = oldStations.filter((element) => element != station);
    localStorage.setItem('stations', JSON.stringify(stations));
    return true;
  }
}
