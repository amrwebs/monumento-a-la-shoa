document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const imagenes = carrusel.querySelectorAll("img");
    const totalImagenes = imagenes.length;
    let indice = 0;

    // Crear indicadores
    const indicadoresContainer = document.querySelector(".indicadores");
    indicadoresContainer.innerHTML = ""; // Limpiar indicadores previos

    imagenes.forEach((_, i) => {
        const indicador = document.createElement("div");
        indicador.dataset.index = i;
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
    let autoSlide = setInterval(() => moverCarrusel(1), 5000);

    // Detener el auto-slide al interactuar
    function reiniciarAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => moverCarrusel(1), 5000);
    }

    // Eventos de botones
    document.querySelector(".carrusel-btn.izquierda").addEventListener("click", () => {
        moverCarrusel(-1);
        reiniciarAutoSlide();
    });

    document.querySelector(".carrusel-btn.derecha").addEventListener("click", () => {
        moverCarrusel(1);
        reiniciarAutoSlide();
    });

    // Control por indicadores
    indicadores.forEach(dot => {
        dot.addEventListener("click", function () {
            indice = parseInt(this.dataset.index);
            actualizarCarrusel();
            reiniciarAutoSlide();
        });
    });
});
