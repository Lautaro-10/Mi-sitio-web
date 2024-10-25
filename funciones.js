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

var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var edad = document.getElementById('edad');
var error = document.getElementById('mensaje');
error.style.color='red';

    function envioformulario(){
        
        var mensajeserror=[];
        
        if(nombre.value === null || nombre.value ===''){
            mensajeserror.push("Ingrese su nombre");
        }
        if(edad.value === null || edad.value<18){
            mensajeserror.push("Debe tener mas de 18 para consultar las ofertas");

        }

        error.innerHTML = mensajeserror.join(',  ');




    }
