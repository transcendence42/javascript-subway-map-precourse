export function addStation(newStation) {
  let oldStations = localStorage.getItem('stations');
  if (oldStations === null) {
    let stations = [newStation];
    localStorage.setItem('stations', JSON.stringify(stations));
    return true;
  } else {
    let stations = JSON.parse(oldStations);
    if (stations.includes(newStation) === false) {
      stations.push(newStation);
      localStorage.setItem('stations', JSON.stringify(stations));
      return true;
    } else {
      return false;
    }
  }
}

export function deleteStation(station) {
  let oldStations = JSON.parse(localStorage.getItem('stations'));
  const stations = oldStations.filter(element => element != station);
  localStorage.setItem('stations', JSON.stringify(stations));
}
