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

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰";
    toggleBtn.classList.add("nav-toggle");
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        if (nav.style.left === "0px") {
            nav.style.left = "-250px";
        } else {
            nav.style.left = "0px";
        }
    });
});
