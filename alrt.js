const formulario = document.getElementById('#form');


formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Esto evita que el formulario se envíe y la página se recargue

    // Muestra una alerta
    alert('¡Solicitud enviada!');
});