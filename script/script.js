const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 10; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.class = 'row-container';
    gridContainer.appendChild(rowContainer);

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.class = 'cell';
        rowContainer.appendChild(cell);
    }
}