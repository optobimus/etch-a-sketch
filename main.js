
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
        if (container.getAttribute('value') === 'hovered') {
            container.style.filter = `brightness(50%)`;
        } else {
            container.style.backgroundColor = random_rgba();
            container.setAttribute('value', 'hovered');
        }
    }));
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const button = document.querySelector("button");
button.addEventListener(("click"), function(e) {
    squares = prompt("Insert X:");
    if (squares > 100) return;
    generateGrid(squares);
});

let squares = 16;

generateGrid(squares);