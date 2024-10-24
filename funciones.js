const imagenes= ['/imagenes/bariloche.jfif','/imagenes/brasil.jfif','/imagenes/costa rica.jfif','/imagenes/marruecos.jfif']
let indice=0;

document.getElementById('siguiente').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('carouselImagen').src = imagenes[indice];
});