const gridContainer = document.querySelector('.grid-container');

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        gridContainer.appendChild(rowContainer);
    
        for (let j = 0; j < num; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            rowContainer.appendChild(cell);
        }
    }
}


function addHoverClass() {
    this.classList.add('hover');
}

createGrid(16);
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', addHoverClass))