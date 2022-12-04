
const wrapper = document.querySelector('#wrapper');

function generateGrid(squares) {
    removeAllChildNodes(wrapper);
    for (let i = 0; i < squares; i++) {
        for(let j = 0; j < squares; j++) {
            let div = document.createElement('div');
            div.classList.add('container');
            wrapper.appendChild(div);
            wrapper.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
            wrapper.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        }
    }
    drawColor();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function drawColor() {
    let containers = document.querySelectorAll('.container');
    containers.forEach(container => 
    container.addEventListener(("mouseover"), (e) => {
        container.style.backgroundColor = "black";
    }));
}

const button = document.querySelector("button");
button.addEventListener(("click"), function(e) {
    squares = prompt("Insert X:");
    if (squares > 100) return;
    generateGrid(squares);
});

let squares = 16;

generateGrid(squares);