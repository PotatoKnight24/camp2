document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const gameBoard = document.getElementById('game-board');
    const pieces = document.querySelectorAll('.game-piece');

    pieces.forEach(piece => {
        piece.addEventListener('mousedown', startDrag);
    });

    let activePiece = null;
    let offsetX, offsetY;

    function startDrag(e) {
        activePiece = e.target;
        offsetX = e.clientX - activePiece.getBoundingClientRect().left;
        offsetY = e.clientY - activePiece.getBoundingClientRect().top;
        gameContainer.addEventListener('mousemove', dragPiece);
        gameContainer.addEventListener('mouseup', endDrag);
    }

    function dragPiece(e) {
        if (activePiece) {
            activePiece.style.left = `${e.clientX - offsetX}px`;
            activePiece.style.top = `${e.clientY - offsetY}px`;
        }
    }

    function endDrag() {
        gameContainer.removeEventListener('mousemove', dragPiece);
        gameContainer.removeEventListener('mouseup', endDrag);
        activePiece = null;
    }


});
