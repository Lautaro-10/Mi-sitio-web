const imagenes = [
    'imagenes/bariloche.jfif',
    'imagenes/brasil.jfif',
    'imagenes/costa-rica.jfif',  
    'imagenes/marruecos.jfif'
];
let indice = 0;

document.getElementById('siguiente').addEventListener('click', () => {
    indice = (indice + 1) % imagenes.length;  
    document.getElementById('imagencarrousel').src = imagenes[indice];
});

document.getElementById('anterior').addEventListener('click', () => {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    document.getElementById('imagencarrousel').src = imagenes[indice];
});

document.getElementById("formulario").addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();

    let Error = false;
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const email = document.getElementById('email');


    if (nombre.value.trim() === "") {
        muestraError('error-nombre', 'El nombre completo es obligatorio.');
        nombre.classList.add('error');
        Error = true;
    }

    if (edad.value < 16) {
        muestraError('error-edad', 'La edad debe ser mayor o igual a 16 años.');
        edad.classList.add('error');
        Error = true;
    }

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        muestraError('error-email', 'El correo electrónico no es válido.');
        email.classList.add('error');
        Error = true;
    }
    if (!Error) {
        document.getElementById('feedback-nombre').textContent = nombre.value;
        document.getElementById('feedback-edad').textContent = edad.value;
        document.getElementById('feedback-email').textContent = email.value || "No proporcionado";
        document.getElementById('feedback-genero').textContent = genero.value;
        document.getElementById('feedback-deporte').textContent = deporte.value;
        document.getElementById('feedback').style.display = 'block';

        alert('Formulario enviado con éxito');

        document.getElementById('formulario').reset();
    }

});
function muestraError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}
function clearErrors() {
    const errorMensaje = document.querySelectorAll('.error-mensaje');
    errorMensaje.forEach(error => error.textContent = '');

    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
}