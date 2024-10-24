const imagenes = [
    'imagenes/playa.webp',
    'imagenes/nieve.jpg',
    'imagenes/selva.jpg',  
    'imagenes/desierto.jpg'
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

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const edad = parseInt(document.getElementById('edad').value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{10}$/;

    let errores = [];

    if (!nombre.trim()) {
        errores.push("El nombre es obligatorio.");
    }

    if (!emailRegex.test(email)) {
        errores.push("El correo electrónico no es válido.");
    }

    if (!telefonoRegex.test(telefono)) {
        errores.push("El teléfono debe tener 10 dígitos.");
    }

    if (isNaN(edad) || edad < 18) {
        errores.push("La edad debe ser mayor o igual a 18 años.");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
    } else {
        mostrarDatos(nombre, email, telefono, edad);
    }
});

function mostrarErrores(errores) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerHTML = ''; 
    errores.forEach(error => {
        const errorParrafo = document.createElement('p');
        errorParrafo.textContent = error;
        errorParrafo.style.color = 'red';
        mensajeDiv.appendChild(errorParrafo);
    });
}

function mostrarDatos(nombre, email, telefono, edad) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerHTML = ''; 

    const datosParrafo = document.createElement('p');
    datosParrafo.textContent = `Nombre: ${nombre}, Correo: ${email}, Teléfono: ${telefono}, Edad: ${edad}`;
    mensajeDiv.appendChild(datosParrafo);
}
