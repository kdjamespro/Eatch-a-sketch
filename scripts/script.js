const drawingBoard = document.querySelector('.drawing-board');
const clear = document.querySelector('.clear');

let drag = false;
let color = document.querySelector('#color-picker');
let slider = document.querySelector('#grid-slider');

function drawBoard(size)
{
    setSize(size);
    for(let i = 0; i < size * size; i++)
    {
        let tile = document.createElement('div');
        tile.classList.toggle('drawing-boxes');
        tile.addEventListener('mousedown', (event) => fillTiles(event)
        );
        tile.addEventListener('mouseover', (event) => fillTiles(event));
        drawingBoard.appendChild(tile);
    }
}

function setSize(size)
{
    drawingBoard.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);`)
}

function deleteBoard()
{
    let tiles = document.querySelector('.drawing-board').childNodes;
    for(i = 0; tiles.length; i++)
    {
        tiles[i].parentNode.removeChild(tiles[i]);
    }
}

function fillTiles(event)
{
    if(drag)
    {
        let color = document.querySelector('#color-picker').value;
        event.target.style.background = color;
    }
}

drawingBoard.addEventListener('mousedown', (event) =>{
    drag = true;
    fillTiles(event)
});

drawingBoard.addEventListener('mouseup', () =>{
    drag = false;
    console.log(drag)
});

clear.addEventListener('click', () => {
    let drawingTiles = document.querySelectorAll('.drawing-boxes');
    if(!drawingTiles.length == 0)
    {
        for(i = 0; drawingTiles.length; i++)
        {
            drawingTiles[i].style.background = 'white';
        }
    }
});

slider.addEventListener('change', () =>{
    deleteBoard();
    drawBoard(parseInt(slider.value));
})

drawBoard(parseInt(slider.value));
