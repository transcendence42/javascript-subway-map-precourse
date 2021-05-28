export function removeAllChildren(elem){
    while (elem.hasChildNodes()){
        elem.removeChild(elem.firstChild);
    }
}