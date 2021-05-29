export const removeChildNodes = (element) => {
	// console.log(element.hasChildNodes());
	if (!element.hasChildNodes()) {
	  return;
	}
	while (element.hasChildNodes()) {
	  element.removeChild(element.lastChild);
	}
  };
