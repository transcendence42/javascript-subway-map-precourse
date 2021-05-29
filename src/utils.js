export function removeAllChildren(elem) {
  if (elem.hasChildNodes() === false) {
    return;
  }
  while (elem.hasChildNodes()) {
    elem.removeChild(elem.firstChild);
  }
}
