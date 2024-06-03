window.addEventListener('load', function () {
    setTimeout(function () {
        // Ocultar el preloader
        var preloader = document.getElementById('preloader');
        preloader.style.display = 'none';

        // Mostrar el contenido principal
        var container = document.querySelector('.container');
        container.style.display = 'block';

        // Restablecer el overflow del body
        document.body.style.overflow = 'auto';
    }, 1500); // 1.5 segundos
});