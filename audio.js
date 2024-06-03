document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('sonido');

    // Iniciar el audio cuando el usuario haga clic en cualquier lugar de la página
    document.addEventListener('click', function () {
        // Reproducir el audio solo si aún no se ha reproducido
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        }
    });
});
