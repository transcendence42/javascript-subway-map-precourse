export function addLine(newLineName, start, end) {
    let oldLines = localStorage.getItem('lines');
    const newLine = {
        name: newLineName,
        start: start,
        end: end,
    }
    if (oldLines === null) {
        localStorage.setItem('lines', JSON.stringify([newLine]));
        return true;
    } else {
        let lines = JSON.parse(oldLines);
        if (lines.filter(line => line.name != newLineName).length === lines.length){
            lines.push(newLine);
            localStorage.setItem('lines', JSON.stringify(lines));
            return true;
        } 
        return false;
    }
}

export function deleteLine(line) {
    let oldLines = JSON.parse(localStorage.getItem('lines'));
    const lines = oldLines.filter((element) => element.name != line);
    localStorage.setItem('lines', JSON.stringify(lines));
}