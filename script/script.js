const gridContainer = document.querySelector('.grid-container');
let cells = null;

function createGrid(num) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

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

    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', addHoverClass));
}

function getNum() {
    createGrid(input.value);
}

function addHoverClass() {
    this.classList.add('hover');
}

createGrid(16);

const input = document.querySelector('.size-input');


const btn = document.querySelector('.generate-button');
btn.addEventListener('click', getNum);