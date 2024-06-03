// Supongamos que tienes una función para determinar al ganador y guardar su marca en una variable llamada winner

// Identifica al ganador
if (winner === 'X' || winner === 'O') {
    // Obtenemos el elemento del mensaje del ganador
    var winnerMessage = document.getElementById('mensaje');
    // Agregamos la clase 'winner' al mensaje del ganador para aplicar la animación
    winnerMessage.classList.add('winner');
}
