const container = document.querySelector("#container");
const btn = document.querySelector('#newGrid');


function chooseSize(size) {
    if (size > 100) {
        let size = 100;
        return size;
    } else if (size < 1) {
        let size = 1
    } else {
        return size;
    };
    console.log("the size is" + size)
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols)
    for (i = 0; i < (rows * cols); i++) {
        let divs = document.createElement("div");
        container.appendChild(divs).classList.add("grid-item");
        divs.setAttribute("onmouseout", "this.className='colored'")
    };  
};

function newGrid(size, size) {
    removeAllChildNodes(container)
    createGrid(size, size)
}

createGrid(16, 16);


btn.addEventListener('click', () => {
    let size = Number(prompt("choose a number between 1 and 100!"));
    if (size < 1) {
        let size = 1;
        console.log(size)
        newGrid(size, size);
    } else if (size > 100) {
        let size = 100;
        console.log(size)
        newGrid(size, size);
    } else if (isNaN(size)) {
        alert("That's not a number!");
    } else {
        newGrid(size, size);
    };
});