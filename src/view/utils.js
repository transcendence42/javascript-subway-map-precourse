export const removeChildNodes = (element) => {
	while (element.hasChildNodes()) {
	  element.removeChild(element.lastChild);
	}
  };
