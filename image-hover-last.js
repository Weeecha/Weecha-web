document.addEventListener("DOMContentLoaded", function() {
    var textoHover = document.querySelector("#menu-item-216");
    var textoHover2 = document.querySelector("#menu-item-28"); // Cambia "nuevo-selector" por el selector que desees para textoHover2
var textoHover3 = document.querySelector("#menu-item-26");
var textoHover4 = document.querySelector("#menu-item-345");

    // Función para mostrar la imagen cuando el mouse está sobre el elemento
    function mostrarImagen(textoHover, imagenSrc) {
        var imagen = document.createElement("img");
        imagen.setAttribute("src", imagenSrc);
        imagen.setAttribute("alt", "Imagen");
        imagen.classList.add("imagen-hover");
        textoHover.appendChild(imagen);
    }

    // Función para ocultar la imagen cuando el mouse sale del elemento
    function ocultarImagen(textoHover) {
        var imagen = textoHover.querySelector(".imagen-hover");
        if (imagen) {
            imagen.remove();
        }
    }

    // Evento para ocultar la imagen cuando no está en la home
    textoHover.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/home/") {
            return;
        }
        mostrarImagen(textoHover, "http://www.itziarluna.com/wp-content/uploads/2024/04/image00015-1.jpg");
    });

    // Evento para ocultar la imagen cuando el mouse sale del primer elemento
    textoHover.addEventListener("mouseout", function() {
        ocultarImagen(textoHover);
    });

    // Evento para mostrar la imagen cuando el mouse está sobre el segundo elemento
    textoHover2.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/home/") {
            return;
        }
        mostrarImagen(textoHover2, "http://www.itziarluna.com/wp-content/uploads/2024/04/image00015-1.jpg"); // Cambia la ruta de la imagen aquí
    });

    // Evento para ocultar la imagen cuando el mouse sale del segundo elemento
    textoHover2.addEventListener("mouseout", function() {
        ocultarImagen(textoHover2);
    });


 textoHover3.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/home/") {
            return;
        }
        mostrarImagen(textoHover3, "http://www.itziarluna.com/wp-content/uploads/2024/04/image00023.jpg"); // Cambia la ruta de la imagen aquí
    });

    // Evento para ocultar la imagen cuando el mouse sale del segundo elemento
    textoHover3.addEventListener("mouseout", function() {
        ocultarImagen(textoHover3);
    });


 textoHover4.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/home/") {
            return;
        }
        mostrarImagen(textoHover4, "http://www.itziarluna.com/wp-content/uploads/2024/04/image00022.jpg"); // Cambia la ruta de la imagen aquí
    });

    // Evento para ocultar la imagen cuando el mouse sale del segundo elemento
    textoHover4.addEventListener("mouseout", function() {
        ocultarImagen(textoHover4);
    });

    // Agrega más eventos para cada selector adicional que desees
});
document.addEventListener("DOMContentLoaded", function() {
    var hoverEstudio = document.querySelector("#itziarnombre");

    function mostrarImagen(hoverEstudio, imagenSrc) {
        // Función para mostrar la imagen cuando el mouse está sobre el elemento
        var imagen = document.createElement("img");
        imagen.setAttribute("src", imagenSrc);
        imagen.setAttribute("alt", "Imagen");
        imagen.classList.add("hover-estudio");
        hoverEstudio.appendChild(imagen);
    }

    // Función para ocultar la imagen cuando el mouse sale del elemento
    function ocultarImagen(hoverEstudio) {
        var imagen = hoverEstudio.querySelector(".hover-estudio");
        if (imagen) {
            imagen.remove();
        }
    }

    // Evento para mostrar la imagen solo cuando está en la home
    hoverEstudio.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/estudio-copy/") {
            return;
        }
        mostrarImagen(hoverEstudio, "http://www.itziarluna.com/wp-content/uploads/2024/04/ITZIAR2.jpg");
    });

    // Evento para ocultar la imagen cuando el mouse sale del primer elemento
    hoverEstudio.addEventListener("mouseout", function() {
        ocultarImagen(hoverEstudio);
    });
});
