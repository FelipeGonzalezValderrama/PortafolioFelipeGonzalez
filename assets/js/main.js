
/*--/ Star Typed text-slider-item en section Intro /--*/
if ($('.text-slider').length == 1) {
  var typed_strings = $('.text-slider-items').text();
  var typed = new Typed('.text-slider', {
    strings: typed_strings.split(','),
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
  });
}

/*--/ Navbar Menu cambio transparente a blanco /--*/
$(window).trigger('scroll');
$(window).on('scroll', function () {
  var pixels = 50;
  var top = 1200;
  if ($(window).scrollTop() > pixels) {
    $('.navbar-expand-md').addClass('navbar-reduce');
    $('.navbar-expand-md').removeClass('navbar-trans');
  } else {
    $('.navbar-expand-md').addClass('navbar-trans');
    $('.navbar-expand-md').removeClass('navbar-reduce');
  }
  if ($(window).scrollTop() > top) {
    $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
  } else {
    $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
  }
});

/* JS-Scroll resalta opciones del menu*/
$('.js-scroll').on("click", function () {
  $('.navbar-collapse').collapse('hide');
});

/*Activate scrollspy marca las opciones actuales en el navbar*/
$(document).ready(function () {
  var navHeight = $('.navbar').outerHeight();
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
});


/* progress bar animacion*/
// Define los valores de porcentaje para cada barra
var progressBars = document.querySelectorAll('.progress-bar');

function animateProgressBar(progressBar) {
  var value = progressBar.getAttribute('data-value');
  var percent = progressBar.querySelector('.progress-percent');
  var label = progressBar.querySelector('.progress-label');
  var width = 0;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= value) {
      clearInterval(id);
    } else {
      width++;
      progressBar.style.width = width + '%';
    }
  }
}

function handleIntersect(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      animateProgressBar(entry.target);
    }
  });
}

var observer = new IntersectionObserver(handleIntersect, { threshold: 0.2 });

progressBars.forEach(function (bar) {
  observer.observe(bar);
});


// formulario.js

// Función para enviar el formulario
function enviarFormulario() {
  // Obtener los valores ingresados en el formulario
  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var mensaje = document.getElementById('mensaje').value;

  // Configurar los datos del correo electrónico
  var data = {
    nombre: nombre,
    correo: correo,
    mensaje: mensaje
  };

  // Enviar el correo electrónico utilizando EmailJS
  emailjs.send('service_guph19a', 'template_hn59lub', data)
    .then(function(response) {
      console.log('El correo electrónico se envió correctamente', response.status, response.text);
    }, function(error) {
      console.log('Error al enviar el correo electrónico', error);
    });

  // Evitar que el formulario se envíe mediante la acción predeterminada
  return false;
}

//carousel
$(document).ready(function() {
  // Inicializar el tooltip al cargar la página
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Activar el carrusel al cargar la página
  $('#imageCarousel').carousel();
});



