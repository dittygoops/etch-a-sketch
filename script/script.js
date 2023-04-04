const gridContainer = document.querySelector('.grid-container');

//#region Algorithm to create grid
for (let i = 0; i < 10; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');
    gridContainer.appendChild(rowContainer);

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        rowContainer.appendChild(cell);
    }
}
//#endregion