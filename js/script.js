let fillColor = "#000000";
let cells;
let rainbowActive = false;

const board = document.getElementById('board');
const changeCellCountBtn = document.getElementById('change-cell-count');
const clearBtn = document.getElementById('clear');

const colorInput = document.getElementById('color');
const gridCheckbox = document.getElementById('grid');
const rainbowCheckbox = document.getElementById('rainbow');

function createBoard(cellCount) {

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
        cell.addEventListener('mouseover', () => {
            if(rainbowActive){
                fillColor = getRandomColor();
            }
            else {
                fillColor = colorInput.value;
            }
            paintCell(cell, fillColor);
        });
    });
}

function paintCell(cell, color){
    cell.style.backgroundColor = color;
}

function getRandomColor() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    return `rgb(${red},${green},${blue})`;
}

changeCellCountBtn.addEventListener('click', () => {
    cellCount = parseInt(prompt("Enter the new value (Max: 100)"));
    if(cellCount > 100){
        createBoard(100);
    }
    else {
        createBoard(cellCount);
    }
});

clearBtn.addEventListener('click', () => {
    cells.forEach(cell => {
        paintCell(cell, "#FFFFFF");
    });
});

gridCheckbox.addEventListener('input', () => {
    board.classList.toggle('grid');
    Array.from(board.childNodes).forEach(row => {
        Array.from(row.childNodes).forEach(cell => {
            cell.classList.toggle('grid');
        });
        row.classList.toggle('grid');
    }); 
});

rainbowCheckbox.addEventListener('input', () =>{
    if(rainbowActive){
        rainbowActive = false;
    }
    else {
        rainbowActive = true;
    }
});

createBoard(16);


