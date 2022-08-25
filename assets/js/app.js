// constrolador carrusel habilidades
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' , {
        type   : 'loop',
        perPage: 3,
        autoplay: true,
        breakpoints: {
            991: {
                perPage: 2,
            },

            576: {
                perPage: 1,
            },
        }
      });

    splide.mount();
  } );

// anclas nav

const links = document.querySelectorAll("a.ancla");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop -50;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
} 
