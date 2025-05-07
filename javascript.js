let container = document.querySelector('.container');

let width = 16;
let height = width;

function createGrid(width, height) {
    
    container.innerHTML = '';

    let squareSize = 640 / width; 

    for (let i = 0; i < width * height; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        

        square.addEventListener("mouseenter", () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
    }
}

function changeDimension() {
    let newSize = prompt("Specify your preferred grid size (max 100)");

    if (newSize === null) return; 
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    width = newSize;
    height = newSize;
    createGrid(width, height);
}

// Create initial grid
createGrid(width, height);
