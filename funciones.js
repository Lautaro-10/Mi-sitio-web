
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
    
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();  

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const edad = parseInt(document.getElementById('edad').value);
        const provincia = document.getElementById('provincias').value;

        let errores = [];

        if (!nombre) {
            errores.push('El nombre es obligatorio.');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errores.push('El correo electrónico no es válido.');
        }

        if (!/^[0-9]{10}$/.test(telefono)) {
            errores.push('El teléfono debe tener 10 dígitos.');
        }

        if (isNaN(edad) || edad < 18) {
            errores.push('La edad debe ser mayor o igual a 18 años.');
        }

        if (!provincia) {
            errores.push('Seleccione una provincia.');
        }

        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.innerHTML = '';

        if (errores.length > 0) {
            errores.forEach(error => {
                const errorParrafo = document.createElement('p');
                errorParrafo.textContent = error;
                errorParrafo.style.color = 'red';
                mensajeDiv.appendChild(errorParrafo);
            });
        } else {
            const exitoParrafo = document.createElement('p');
            exitoParrafo.textContent = `Formulario enviado correctamente. Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}, Edad: ${edad}, Provincia: ${provincia}`;
            exitoParrafo.style.color = 'green';
            mensajeDiv.appendChild(exitoParrafo);
        }
    });
