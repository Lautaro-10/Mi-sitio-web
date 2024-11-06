const imagenes = [
    'imagenes/playa.webp',
    'imagenes/selva.jpg',
    'imagenes/nieve.jpg',  
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