const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
   if (window.pageYOffset > 500) {
      navbar.classList.remove('top')
      if (!scrolled) {
         navbar.style.transform = "translateY(-70px)";
      }
      setTimeout(function () {
         navbar.style.transform = "translateY(0)";
         scrolled = true;
      }, 500);
   } else {
      navbar.classList.add('top');
      scrolled = false;
   }
}

// Smooth Scrolling
/* $('#navbar a').on('click', function (e) {
   if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
         {
            scrollTop: $(hash).offset().top - 50,
         },2000
      );
   }
}); */

//Modal de la Ubicación
let openModal = document.querySelector('.boton-ubicacion');
let modal = document.querySelector('.modal-ubicacion');
let closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', function (e) {
   e.preventDefault();
   modal.classList.toggle('modal-show');
});

closeModal.addEventListener('click', function (e) {
   e.preventDefault();
   modal.classList.toggle('modal-show');
});

//Modal de la Galería
let imagenes = document.querySelectorAll("#img-galeria");
for (let i = 0; i < imagenes.length; i++) {
   imagenes[i].addEventListener('click', function (e) {
      e.preventDefault();
      alert("Ha presionado la imagen");
   });
}