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

        if (!/^[0-9]{10}$/.test(telefono)) {
            errorTelefono.textContent = "El teléfono debe tener 10 dígitos.";
            formularioValido = false;
        } 

        if (isNaN(edad) || edad < 18) {
            errorEdad.textContent = "La edad debe ser mayor o igual a 18 años.";
            formularioValido = false;
        }

        if (!provincia) {
            errorProvincia.textContent = "Seleccione una provincia.";
            formularioValido = false;
        }

        if (formularioValido) {
            console.log(nombre,email,edad,provincia);
            
            const datosDiv = document.createElement('div');
            datosDiv.innerHTML = '<h3>Datos Ingresados:</h3>';
            const nombreP = document.createElement('p');
            nombreP.innerHTML = `<strong>Nombre:</strong> ${nombre}`;
            datosDiv.appendChild(nombreP);
            const emailP = document.createElement('p');
            emailP.innerHTML = `<strong>Correo Electrónico:</strong> ${email}`;
            datosDiv.appendChild(emailP);
            const telefonoP = document.createElement('p');
            telefonoP.innerHTML = `<strong>Teléfono:</strong> ${telefono}`;
            datosDiv.appendChild(telefonoP);
            const edadP = document.createElement('p');
            edadP.innerHTML = `<strong>Edad:</strong> ${edad}`;
            datosDiv.appendChild(edadP);
        
            const provinciaP = document.createElement('p');
            provinciaP.innerHTML = `<strong>Provincia:</strong> ${provincia}`;
            datosDiv.appendChild(provinciaP);
            feedback.appendChild(datosDiv);
        
            document.getElementById('formulario').reset();
            
        }
        
    });
   