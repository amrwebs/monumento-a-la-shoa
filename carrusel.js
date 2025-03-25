document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const imagenes = carrusel.querySelectorAll("img");
    const totalImagenes = imagenes.length;
    const indicadoresContainer = document.querySelector(".indicadores");
    let indice = 0;
    let autoSlide;
    let isAnimating = false; // Evitar clics durante animaciones

    if (!carrusel || !indicadoresContainer || totalImagenes === 0) {
        console.error("Faltan elementos necesarios para el carrusel.");
        return;
    }

    // Crear indicadores dinámicamente
    indicadoresContainer.innerHTML = "";
    imagenes.forEach((_, i) => {
        const indicador = document.createElement("div");
        indicador.dataset.index = i;
        if (i === 0) indicador.classList.add("activo");
        indicadoresContainer.appendChild(indicador);
    });

    const indicadores = document.querySelectorAll(".indicadores div");

    // Función para animar el carrusel con fade y desplazamiento suave
    function actualizarCarrusel() {
        if (isAnimating) return;
        isAnimating = true;

        carrusel.style.transition = "transform 0.6s ease-in-out, opacity 0.4s ease";
        carrusel.style.opacity = "0"; // Desvanecimiento inicial

        setTimeout(() => {
            carrusel.style.transform = `translateX(${-indice * 100}%)`;
            carrusel.style.opacity = "1"; // Reaparece suavemente
            indicadores.forEach((dot, i) => dot.classList.toggle("activo", i === indice));
            isAnimating = false;
        }, 200); // Retraso para el fade
    }

    // Mover el carrusel en una dirección
    function moverCarrusel(direccion) {
        indice = (indice + direccion + totalImagenes) % totalImagenes;
        actualizarCarrusel();
    }

    // Iniciar auto-slide con intervalo más elegante
    function iniciarAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => moverCarrusel(1), 6000); // Intervalo más largo para apreciar animaciones
    }

    iniciarAutoSlide();

    // Botones de navegación
    const btnIzquierda = document.querySelector(".carrusel-btn.izquierda");
    const btnDerecha = document.querySelector(".carrusel-btn.derecha");

    if (btnIzquierda) {
        btnIzquierda.addEventListener("click", () => {
            if (!isAnimating) {
                moverCarrusel(-1);
                iniciarAutoSlide();
            }
        });
    }

    if (btnDerecha) {
        btnDerecha.addEventListener("click", () => {
            if (!isAnimating) {
                moverCarrusel(1);
                iniciarAutoSlide();
            }
        });
    }

    // Control por indicadores
    indicadores.forEach((dot) => {
        dot.addEventListener("click", function () {
            if (!isAnimating) {
                indice = parseInt(this.dataset.index, 10);
                actualizarCarrusel();
                iniciarAutoSlide();
            }
        });
    });

    // Pausar y reanudar auto-slide con hover
    carrusel.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
        carrusel.style.opacity = "0.95"; // Ligero resalte al pausar
    });

    carrusel.addEventListener("mouseleave", () => {
        carrusel.style.opacity = "1";
        iniciarAutoSlide();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".imagen-click"); // Seleccionamos todas las imágenes con la clase imagen-click

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", function () {
            const srcImagen = this.querySelector("img").src; // Obtenemos el src de la imagen
            mostrarImagenAmpliada(srcImagen); // Llamamos a la función para mostrar la imagen ampliada
        });
    });

    function mostrarImagenAmpliada(src) {
        const divAmpliada = document.createElement("div");
        divAmpliada.classList.add("imagen-ampliada");
        
        const imgAmpliada = document.createElement("img");
        imgAmpliada.src = src;
        divAmpliada.appendChild(imgAmpliada);

        const botonCerrar = document.createElement("button");
        botonCerrar.textContent = "✖";
        botonCerrar.classList.add("cerrar-imagen");
        divAmpliada.appendChild(botonCerrar);

        botonCerrar.addEventListener("click", function () {
            divAmpliada.remove(); // Cerramos la imagen cuando se hace clic en el botón de cierre
        });

        document.body.appendChild(divAmpliada); // Añadimos el contenedor de la imagen ampliada al body
    }
});
