let indice = 0;

function moverCarrusel(direccion) {
    const carrusel = document.querySelector(".carrusel");
    const imagenes = carrusel.getElementsByTagName("img");
    const totalImagenes = imagenes.length;
    
    indice = (indice + direccion + totalImagenes) % totalImagenes;
    carrusel.style.transform = `translateX(${-indice * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".carrusel");
    carrusel.style.display = "flex";
    carrusel.style.transition = "transform 0.5s ease-in-out";
    carrusel.style.width = `${totalImagenes * 100}%`;
    carrusel.style.overflow = "hidden";
});