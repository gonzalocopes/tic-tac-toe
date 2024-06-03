document.addEventListener('DOMContentLoaded', function () {
    const mensaje = document.getElementById('mensaje');
    const tablero = document.getElementById('tablero');
    const resetButton = document.getElementById('reset');
    const CELLS_COUNT = 9;
    let turn = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];

    // tablero
    function dibujarTablero() {
        tablero.innerHTML = '';
        for (let i = 0; i < CELLS_COUNT; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.innerText = board[i];
            cell.addEventListener('click', handleCellClick);
            tablero.appendChild(cell);
        }
    }


    // click celda
    function handleCellClick(event) {
        const index = event.target.dataset.index;
        if (board[index] === '') {
            board[index] = turn;
            dibujarTablero();
            if (checkWinner()) {
                mensaje.innerText = `¡Felicidades ${turn}! ¡Has ganado!`;
                mensaje.classList.add('winner-animation');
                tablero.removeEventListener('click', handleCellClick);
            } else if (board.every(cell => cell !== '')) {
                mensaje.innerText = `¡Empate!`;
                mensaje.classList.add('winner-animation');
                tablero.removeEventListener('click', handleCellClick);
            } else {
                turn = turn === 'X' ? 'O' : 'X';
                mensaje.innerText = `Turno de ${turn}`;
            }
        }
    }


    // verifica si hay un ganador
    function checkWinner() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    }

    // reset
    function resetGame() {
        turn = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        dibujarTablero();
        mensaje.innerText = 'Turno de X';
        mensaje.classList.remove('winner-animation');
        tablero.addEventListener('click', handleCellClick);
    }

    // botón de reinicio
    resetButton.addEventListener('click', resetGame);

    // Inicia el juego
    dibujarTablero();
});
