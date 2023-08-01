let fillColor = "blue";
let cells;

const board = document.getElementById('board');
const button = document.getElementById('change-cell-count');

function createGrid(cellCount) {

    if(board.hasChildNodes()){
        Array.from(board.childNodes).forEach(row => {
            Array.from(row.childNodes).forEach(cell => {
                cell.remove();
            });
            row.remove();
        });
        cells = [];
    }

    for(let i = 0; i < cellCount; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for(let j = 0; j < cellCount; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            row.appendChild(cell);
        }
        
        board.appendChild(row);
    }

    cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach(cell => {
    cell.addEventListener('mouseover', () => paintCell(cell, fillColor));
    });
}

function paintCell(cell, color){
    cell.style.backgroundColor = color;
}

button.addEventListener('click', () => {
    cellCount = parseInt(prompt("Enter the new value (Max: 100)"));
    if(cellCount > 100){
        createGrid(100);
    }
    else {
        createGrid(cellCount);
    }
})

createGrid(16);


