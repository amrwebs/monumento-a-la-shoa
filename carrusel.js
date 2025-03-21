document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const imagenes = carrusel.querySelectorAll("img");
    const totalImagenes = imagenes.length;
    let indice = 0;

    // Crear indicadores
    const indicadoresContainer = document.querySelector(".indicadores");
    imagenes.forEach((_, i) => {
        const indicador = document.createElement("div");
        if (i === 0) indicador.classList.add("activo");
        indicadoresContainer.appendChild(indicador);
    });
    const indicadores = document.querySelectorAll(".indicadores div");

    function actualizarCarrusel() {
        carrusel.style.transform = `translateX(${-indice * 100}%)`;
        indicadores.forEach((dot, i) => dot.classList.toggle("activo", i === indice));
    }

    function moverCarrusel(direccion) {
        indice = (indice + direccion + totalImagenes) % totalImagenes;
        actualizarCarrusel();
    }

    // Auto-slide cada 5 segundos
    setInterval(() => moverCarrusel(1), 5000);

    // Eventos de botones
    document.querySelector(".carrusel-btn.izquierda").addEventListener("click", () => moverCarrusel(-1));
    document.querySelector(".carrusel-btn.derecha").addEventListener("click", () => moverCarrusel(1));
});
