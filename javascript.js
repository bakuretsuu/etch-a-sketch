let container = document.querySelector('.container');

for (let i = 0; i <  16 * 16; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    
}

let square = document.querySelector("#square");
square.addEventListener("mouseenter", () => {square.classList.add('hovered')});
container.appendChild(square)