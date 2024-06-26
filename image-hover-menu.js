document.addEventListener("DOMContentLoaded", function() {
    var textoHover = document.querySelector("body > nav.laynav.desktop-nav.show-submenu-on-hover.submenu-type-horizontal.laynav-position-top-left.arrangement-horizontal.position-top.is-fixed.primary > ul > li.servicios-menu.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-216");
    var textoHover2 = document.querySelector("body > nav.laynav.desktop-nav.show-submenu-on-hover.submenu-type-horizontal.laynav-position-top-left.arrangement-horizontal.position-top.is-fixed.primary > ul > li.consultoria-menu.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-28"); // Cambia "nuevo-selector" por el selector que desees para textoHover2
var textoHover3 = document.querySelector("body > nav.laynav.desktop-nav.show-submenu-on-hover.submenu-type-horizontal.laynav-position-top-left.arrangement-horizontal.position-top.is-fixed.primary > ul > li.galeria-menu.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-26");
var textoHover4 = document.querySelector("body > nav.laynav.desktop-nav.show-submenu-on-hover.submenu-type-horizontal.laynav-position-top-left.arrangement-horizontal.position-top.is-fixed.primary > ul > li.estudio-menu.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-217");

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

    // Evento para mostrar la imagen cuando el mouse está sobre el primer elemento
    textoHover.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/home/") {
            return;
        }
        mostrarImagen(textoHover, "http://www.itziarluna.com/wp-content/uploads/2024/03/TMPL_TWR_7-1387x2080-1.jpg");
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
        mostrarImagen(textoHover2, "http://www.itziarluna.com/wp-content/uploads/2024/04/image00037.jpg"); // Cambia la ruta de la imagen aquí
    });

    // Evento para ocultar la imagen cuando el mouse sale del segundo elemento
    textoHover2.addEventListener("mouseout", function() {
        ocultarImagen(textoHover2);
    });


 textoHover3.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/home/") {
            return;
        }
        mostrarImagen(textoHover3, "http://www.itziarluna.com/wp-content/uploads/2024/04/image00035.jpg"); // Cambia la ruta de la imagen aquí
    });

    // Evento para ocultar la imagen cuando el mouse sale del segundo elemento
    textoHover3.addEventListener("mouseout", function() {
        ocultarImagen(textoHover3);
    });


 textoHover4.addEventListener("mouseover", function() {
        if (window.location.pathname !== "/home/") {
            return;
        }
        mostrarImagen(textoHover4, "http://www.itziarluna.com/wp-content/uploads/2024/04/ITZIAR.jpg"); // Cambia la ruta de la imagen aquí
    });

    // Evento para ocultar la imagen cuando el mouse sale del segundo elemento
    textoHover4.addEventListener("mouseout", function() {
        ocultarImagen(textoHover4);
    });

    // Agrega más eventos para cada selector adicional que desees
});
