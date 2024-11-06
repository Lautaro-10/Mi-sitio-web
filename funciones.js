const formulario = document.getElementById("formulario")

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const edad = parseInt(document.getElementById("edad").value);
        const provincia = document.getElementById("provincias").value;


        const errorNombre = document.getElementById("error-nombre");
        const errorEmail = document.getElementById("error-email");
        const errorTelefono = document.getElementById("error-telefono");
        const errorEdad = document.getElementById("error-edad");
        const errorProvincia = document.getElementById("error-provincia");
        const feedback = document.getElementById("feedback");

        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorTelefono.textContent = "";
        errorEdad.textContent = "";
        errorProvincia.textContent = "";
        feedback.textContent = "";

        let formularioValido = true;

        if (!nombre) {
            errorNombre.textContent = "El nombre es obligatorio.";
            formularioValido = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorEmail.textContent = "El correo electrónico no es válido.";
            formularioValido = false;
        }

      /*  if (!/^[0-9]{10}$/.test(telefono)) {
            errorTelefono.textContent = "El teléfono debe tener 10 dígitos.";
            formularioValido = false;
        } */

        if (isNaN(edad) || edad < 18) {
            errorEdad.textContent = "La edad debe ser mayor o igual a 18 años.";
            formularioValido = false;
        }

        if (!provincia) {
            errorProvincia.textContent = "Seleccione una provincia.";
            formularioValido = false;
        }

        if (formularioValido) {
            alert("Formulario enviado correctamente.");
            feedback.textContent = "¡Formulario enviado correctamente! Gracias por contactarnos.";
            feedback.style.color = "green";
            document.getElementById('nombre').value= "";
            document.getElementById('email').value= "";
            document.getElementById('telefono').value= "";
            document.getElementById('edad').value= "";
            document.getElementById('provincias').value= "";
        }
    });