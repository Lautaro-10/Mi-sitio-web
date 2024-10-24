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
