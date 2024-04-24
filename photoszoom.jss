<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Responsive</title>
  <style>
    /* Estilos para el modal */
    .modal {
      display: none; /* Por defecto, ocultar el modal */
      position: fixed;
      z-index: 999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.9);
    }

    /* Estilos para la imagen dentro del modal */
    .modal-content {
      display: block;
      margin: auto;
      max-height: 70vh;
      width: auto;
    }

    /* Estilos para el botón de cerrar */
    .close {
      color: #fff;
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
    }
    .close:hover {
      color: red;
    }

    /* Estilos para el grid */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0;
      padding: 0px;
    }
    .grid-item a {
      display: block;
    }
    .grid-item {
      margin: 0;
    }
    .grid-item img {
      width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: 0px;
      max-height: 100%;
      display: block;
      margin: 0 auto;
      aspect-ratio: auto;
      transition: opacity 0.3s ease;
    }
    .grid-item:hover img {
      opacity: 0.8;
    }

    /* Media query para móvil */
    @media screen and (max-width: 768px) {
      .grid-container {
        grid-template-columns: repeat(2, 1fr);
      }
      .grid-item:nth-child(n+7) {
        display: none;
      }
    }
  </style>
</head>
<body>

  <div class="grid-container">
  <div class="grid-item"><a href="https://thinkingmu.com/products/small-butterfly-tora-skirt"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/01-TC.jpg?v=1712744758" alt="imagen"></a></div>
  <div class="grid-item"><a href="https://thinkingmu.com/products/clean-denim-david-pants"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/02-TC.jpg?v=1712744757" alt="imagen"></a></div>
    <div class="grid-item"><a href="https://thinkingmu.com/products/tusa-denim-hedda-pants?variant=48931037675846"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/03-TC.jpg?v=1712744757" alt="imagen"></a></div>
    <div class="grid-item"><a href="https://thinkingmu.com/products/butterfly-tom-shirt"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/04-TC.jpg?v=1712744758" alt="imagen"></a></div>
    <div class="grid-item"><a href="https://thinkingmu.com/products/chocolate-seersucker-mae-dress"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/05-TC.jpg?v=1712744757" alt="imagen"></a></div>
    <div class="grid-item"><a href="https://thinkingmu.com/products/chaqueta-navy-macarena"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/06-TC.jpg?v=1712744758" alt="imagen"></a></div>
    <div class="grid-item"><a href="https://thinkingmu.com/products/feuz-blow-frans-jacket"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/07-TC.jpg?v=1712744757" alt="imagen"></a></div>
<div class="grid-item"><a href="https://thinkingmu.com/products/orangered-cuadrito-tom-shirt"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/08-TC.jpg?v=1712744757" alt="imagen"></a></div>
    <div class="grid-item"><a href="https://thinkingmu.com/products/dark-heritage-pia-jumpsuit"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/09-TC.jpg?v=1712744757" alt="imagen"></a></div>
    <div class="grid-item"><a href="https://thinkingmu.com/products/toasted-travel-pants"><img src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/10-TC.jpg?v=1712744757" alt="imagen"></a></div>
  </div>

  <div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <img class="modal-content" id="modal-image">
  </div>

  <script>
    // Obtener elementos del DOM
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const gridItems = document.querySelectorAll(".grid-item img");
    const closeModal = document.getElementById("close");

    // Función para abrir el modal con la imagen
    function openModal(imgSrc) {
      modal.style.display = "block";
      modalImg.src = imgSrc;
    }

    // Event listeners para abrir y cerrar el modal
    gridItems.forEach(item => {
      item.addEventListener("click", () => {
        openModal(item.src);
      });
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Cierra el modal cuando haces clic fuera de la imagen
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  </script>
</body>
</html>


