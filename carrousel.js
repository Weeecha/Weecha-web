<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Carrusel con Imágenes</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<style>
  /* Estilo para imágenes en dispositivos móviles */
  @media (max-width: 767px) {
    .d-block {
      width: 100vw; /* Ancho del 90% del viewport width para dispositivos móviles */
      margin: 0 auto; /* Centra la imagen horizontalmente */
      max-width: none; /* Anula el ancho máximo establecido por Bootstrap */
    }
  }
  
  /* Estilo para imágenes en dispositivos de escritorio */
  @media (min-width: 768px) {
    .d-block {
      width: 50vw; /* Ancho del 50% del viewport width para dispositivos de escritorio */
      margin: 0 auto; /* Centra la imagen horizontalmente */
      max-width: none; /* Anula el ancho máximo establecido por Bootstrap */
    }
  }
  
  .carousel-item {
    background-color: white;
  }
.carousel-control-prev-icon {
    background-image: url('https://cdn.shopify.com/s/files/1/0578/8001/8989/files/flecha-anterior-negro.svg?v=1713197904');
  }
.carousel-control-next-icon {
    background-image: url('https://cdn.shopify.com/s/files/1/0578/8001/8989/files/felcha-siguiente-negro.svg?v=1713197904'); 
  }
</style>
</head>
<body>

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-21.jpg?v=1713887331" alt="Primera imagen">
    </div>
    <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-24.jpg?v=1713887331" alt="Segunda imagen">
    </div>
    <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-27.jpg?v=1713887331" alt="Tercera imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-32.jpg?v=1713887331" alt="Cuarta imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-31.jpg?v=1713887331" alt="Quinta imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-4.jpg?v=1713887332" alt="Sexta imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-11.jpg?v=1713887332" alt="Séptima imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-38.jpg?v=1713887332" alt="Octava imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-37.jpg?v=1713887332" alt="Novena imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-43.jpg?v=1713887332" alt="Décima imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-30.jpg?v=1713887333" alt="Once imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-36.jpg?v=1713887332" alt="Doce imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-8.jpg?v=1713887332" alt="Trece imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-39.jpg?v=1713887332" alt="Catorce imagen">
    </div>
   <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-10.jpg?v=1713887334" alt="Quince imagen">
    </div>
   <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-40.jpg?v=1713887332" alt="Dieciséis imagen">
    </div>
   <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-14.jpg?v=1713887332" alt="Diecisiete imagen">
    </div>
   <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-25.jpg?v=1713887333" alt="Dieciocho imagen">
    </div>
   <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-26.jpg?v=1713887332" alt="Diecinueve imagen">
    </div>
     <div class="carousel-item">
      <img class="d-block" src="https://cdn.shopify.com/s/files/1/0578/8001/8989/files/nilventura__thinkingmu-5.jpg?v=1713887332" alt="Veinte imagen">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Anterior</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Siguiente</span>
  </a>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script>
  // Configurar el intervalo de auto desplazamiento cada 1.5 segundos
  $('.carousel').carousel({
    interval: 3000
  });
</script>
</body>
</html>
