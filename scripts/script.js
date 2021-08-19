const drawingBoard = document.querySelector('.drawing-board');
let drag = false;
let color = document.querySelector('#color-picker');

function drawBoard(size)
{
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
drawBoard(16);
