
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

// JS-Scroll resalta opciones del menú
$('.js-scroll').on("click", function () {
  $('.navbar-collapse').collapse('hide');
});

// Agregar el evento de clic para el botón de la hamburguesa
$('.navbar-toggler').on('click', function () {
  $('.navbar-collapse').collapse('toggle');
});

// Activate scrollspy marca las opciones actuales en el navbar
$(document).ready(function () {
  var navHeight = $('.navbar').outerHeight();
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
});



/* progress bar animacion IntersectionObserver
  Define los valores de porcentaje para cada barra*/
var progressBars = document.querySelectorAll('.progress-bar');

function animateProgressBar(progressBar) {
  var value = progressBar.getAttribute('data-value');
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


// formulario emailJS conection

const btn = document.getElementById('btn');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_guph19a';
    const templateID = 'template_4vky1e9';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('mensaje enviado gracias!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });





