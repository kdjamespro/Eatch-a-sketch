const drawingBoard = document.querySelector('.drawing-board');
const clear = document.querySelector('#clear');
const sliderLabel = document.querySelector('#slider-label');
const eraserButton = document.querySelector('#eraser');
const colorButton = document.querySelector('#color');
const rainbowButton = document.querySelector('#rainbow');
const viewGrid = document.querySelector('#view');

let eraser = false;
let rainbow = false;
let color = document.querySelector('#color-picker');
let slider = document.querySelector('#grid-slider');

function drawBoard(size)
{
    setSize(size);
    for(let i = 0; i < size * size; i++)
    {
        let tile = document.createElement('div');
        tile.classList.toggle('drawing-boxes');
        tile.addEventListener('mousemove', (event) => fillTiles(event));
        drawingBoard.appendChild(tile);
    }
}

function setSize(size)
{
    drawingBoard.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);`)
}

function deleteBoard()
{
    while(drawingBoard.firstChild)
    {
        drawingBoard.removeChild(drawingBoard.lastChild);
    }
}

function fillTiles(event)
{
    let color; 
    if(eraser)
    {
        color = 'white';
    }
    else if(rainbow)
    {
        color = rainbowGenerator();
    }
    else
    {
        color = document.querySelector('#color-picker').value;
    }
    event.target.style.background = color;
}

function rainbowGenerator()
{
    let r = 0 + Math.floor(Math.random() * (255 + 1));
    let g = 0 + Math.floor(Math.random() * (255 + 1));
    let b = 0 + Math.floor(Math.random() * (255 + 1));
    return `rgb(${r},${g},${b})`;
}

colorButton.addEventListener('click', () => {
    colorButton.classList.add('selected');
    rainbowButton.classList.remove('selected');
    eraserButton.classList.remove('selected');
    eraser = false;
    rainbow = false;
});

eraserButton.addEventListener('click', () => {
    eraserButton.classList.add('selected');
    rainbowButton.classList.remove('selected');
    colorButton.classList.remove('selected');
    eraser = true;
    rainbow = false;
});

rainbowButton.addEventListener('click', () => {
    rainbowButton.classList.add('selected');
    eraserButton.classList.remove('selected');
    colorButton.classList.remove('selected');
    rainbow = true;
    eraser = false;
})


clear.addEventListener('click', () => {
    let drawingTiles = document.querySelectorAll('.drawing-boxes');
    if(!drawingTiles.length == 0)
    {
        for(i = 0; i < drawingTiles.length; i++)
        {
            drawingTiles[i].style.background = 'white';
        }
    }
});

viewGrid.addEventListener('click', () => {
    let drawingTiles = document.querySelectorAll('.drawing-boxes');
    if(!drawingTiles.length == 0)
    {
        for(i = 0; i < drawingTiles.length; i++)
        {
            drawingTiles[i].classList.toggle('with-grid');
        }
    }
})


slider.addEventListener('change', () =>{
    let sliderVal = parseInt(slider.value);
    sliderLabel.textContent = "";
    sliderLabel.textContent = `${sliderVal} X ${sliderVal}`;

    deleteBoard();
    drawBoard(sliderVal);
})

drawBoard(parseInt(slider.value));
