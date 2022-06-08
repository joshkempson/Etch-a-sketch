const container = document.querySelector('#container');

for (i = 0; i < 10000; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.width = "1%"; 
    box.style.height = "1%";
    box.style.background = "white";   
}

const tiles = document.querySelectorAll('.box');

tiles.forEach(tile => {
    tile.addEventListener('mouseover', (e)=>{
        tile.style.background = "black";
    })
});

const clearCanvas = document.querySelector('#clearCanvas')

clearCanvas.addEventListener('click', clearCanvasFunction);

function clearCanvasFunction() {
    tiles.forEach(tile => {
            tile.style.background = "white";
    });
};