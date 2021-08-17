const drawingBoard = document.querySelector('.drawing-board');

function drawBoard(size)
{
    for(let i = 0; i < size * size; i++)
    {
        let tile = document.createElement('div');
        tile.classList.toggle('drawing-boxes');
        drawingBoard.appendChild(tile);
    }
}

drawBoard(16);
