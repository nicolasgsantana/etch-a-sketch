function createGrid(cellCount) {
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
}

const board = document.getElementById('board');

createGrid(16);