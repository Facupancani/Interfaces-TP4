var spidey = document.getElementById("spidey");
var gwen1 = document.getElementById("gwen1");
var miles1 = document.getElementById("miles1");
var red1 = document.getElementById("red1");
var red2 = document.getElementById("red2");
var duende = document.getElementById("duende");
var juego41 = document.getElementById("juego4-1");
var juego42 = document.getElementById("juego4-2");
var juego43 = document.getElementById("juego4-3");
var logotipo = document.getElementById("logotipo");
var edifIzq = document.getElementById("edifIzq");
var edifMed = document.getElementById("edifMed");
var edifDer = document.getElementById("edifDer");


window.addEventListener("scroll", function () {
  let y = window.scrollY || window.pageYOffset;
  gwen1.style.top = 388 + y * 0.03 + "px";
  gwen1.style.left = 90 - y * 0.07 + "px";
  miles1.style.top = 335 + y * 0.1 + "px";
  miles1.style.left = 695 + y * 0.1 + "px";
  spidey.style.top = 403 - y * 0.4 + "px";
  red1.style.top = 375 - y * 0.75 + "px";
  red1.style.rotate = y * 0.1 + "deg";
  red2.style.top = 388 - y * 0.12 + "px";
  red2.style.rotate = -y * 0.11 + "deg";
  duende.style.top = 850 + y * 0.15 + "px";

  edifIzq.style.top = 144 + y * 0.15 + "px";
  edifIzq.style.left = -y * 0.15 + "px";
  edifDer.style.top = 126 + y * 0.2 + "px";
  edifDer.style.left = 906 + y * 0.2 + "px";
  var EdifscaleFactor = 1 - y * 0.00025;
  edifMed.style.transform = "scale(" + EdifscaleFactor + ")";


  //** ANIMACION LOGOTIPO NAV */
  if (y < 280) {

    logotipo.style.top = 91 - y * 0.6 + "px";
    var scaleFactor = 1 - y * 0.0017;
    logotipo.style.transform = "scale(" + scaleFactor + ")";
  }

  if (y > 280) {

    logotipo.style.top = -85 + "px";
    var scaleFactor = 0.4;
    logotipo.style.transform = "scale(" + scaleFactor + ")";
  }
//* ANIMACION JUEGO SECCION 3 *//
if (y < 1250){
  var j1 = document.getElementById("contJuego1");
  var j2 = document.getElementById("contJuego2");
  var j3 = document.getElementById("contJuego3");
  j1.style.animation = "saleJuego 1.2s ease forwards";
  j2.style.animation = "saleJuego 1s ease forwards";
  j3.style.animation = "saleJuego 0.8s ease forwards";
}
  if(y > 1250){
    var j1 = document.getElementById("contJuego1");
    var j2 = document.getElementById("contJuego2");
    var j3 = document.getElementById("contJuego3");
    j1.style.animation = "entraJuego 0.8s ease forwards";
    j2.style.animation = "entraJuego 1.0s ease forwards";
    j3.style.animation = "entraJuego 1.2s ease forwards";
  }
  console.log(y)
 
  //* ANIMACION JUEGO SECCION 4 *//
if (y > 1700){
  juego41.style.top = 2550 - y * 0.05 + "px";
  juego42.style.top = 2900 - y * 0.15 + "px";
  juego43.style.top = 3188 - y * 0.2 + "px";
}
 //* ANIMACION JUEGO SECCION 6 *//
 if (y > 3500) {
  features1.classList.remove("oculto");
  features1.classList.add("visible");

  features2.classList.remove("visible");
  features2.classList.add("oculto");

  features3.classList.remove("visible");
  features3.classList.add("oculto");

  features4.classList.remove("visible");
  features4.classList.add("oculto");
}

if (y > 4350) {
  features1.classList.remove("visible");
  features1.classList.add("oculto");

  features2.classList.remove("oculto");
  features2.classList.add("visible");

  features3.classList.remove("visible");
  features3.classList.add("oculto");

  features4.classList.remove("visible");
  features4.classList.add("oculto");
}

if (y > 4700) {
  features1.classList.remove("visible");
  features1.classList.add("oculto");

  features2.classList.remove("visible");
  features2.classList.add("oculto");

  features3.classList.remove("oculto");
  features3.classList.add("visible");

  features4.classList.remove("visible");
  features4.classList.add("oculto");
}
if (y > 5200) {
  features1.classList.remove("visible");
  features1.classList.add("oculto");

  features2.classList.remove("visible");
  features2.classList.add("oculto");

  features3.classList.remove("visible");
  features3.classList.add("oculto");

  features4.classList.remove("oculto");
  features4.classList.add("visible");
}

});

// PARALLAX MOUSE

(function() {
  const elemParallax = document.querySelector("#parallaxMouse");

  if (elemParallax) {
    const _w = window.innerWidth / 2;
    const _h = window.innerHeight / 2;

    elemParallax.addEventListener("mousemove", parallax);

    function parallax(e) {
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${30 - (_mouseX - _w) * 0.01}% ${58 - (_mouseY - _h) * 0.0001}%`; // FONDO
      let _depth2 = `${100 - (_mouseX - _w) * 0.1}% ${50 - (_mouseY - _h) * 0.0001}%`; //
      let _depth3 = `${110 - (_mouseX - _w) * 0.01}% ${65 - (_mouseY - _h) * 0.01}%`; // HULK
      let _depth4 = `${0 - (_mouseX - _w) * 0.01}% ${45 - (_mouseY - _h) * 0.035}%`; // ELASTIC
      let _depth5 = `${20 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.001}%`;
      let _depth6 = `${70 - (_mouseX - _w) * 0.05}% ${10 - (_mouseY - _h) * 0.1}%`; // BLACK PANTHER
      let x = `${_depth6},${_depth5},${_depth4},${_depth3}, ${_depth2}, ${_depth1}`;
      elemParallax.style.backgroundPosition = x;
    }
  }
})();





  

//** ABRIR Y CERRAR MENU DESPLEGABLE */
var modo = true;
function state(){
    var barra1 = document.getElementById("rec1");
    var barra2 = document.getElementById("rec2");
    var barra3 = document.getElementById("rec3");
    var menu = document.getElementById("menu");
    var cat1 = document.getElementById("cat1");
    var cat2 = document.getElementById("cat2");
    var cat3 = document.getElementById("cat3");

    if(modo){
        barra1.style.animation = 'rota1 .5s ease forwards';
        barra2.style.animation = 'rota2 .5s ease forwards';
        barra3.style.animation = 'rota3 .5s ease forwards';
        abrirMenu(menu, cat1, cat2, cat3);
    }else{
        barra1.style.animation = 'desrota1 .5s ease forwards';
        barra2.style.animation = 'desrota2 .5s ease forwards';
        barra3.style.animation = 'desrota3 .5s ease forwards';
        cerrarMenu(menu, cat1, cat2, cat3);
    }
    modo = !modo;
}


function abrirMenu(menu, cat1, cat2, cat3){
    menu.style.animation = 'abrirMenu .5s ease forwards'
    menu.style.opacity = "1";
    cat1.style.animation = 'entraCat 0.5s ease forwards'
    cat2.style.animation = 'entraCat 1s ease forwards'
    cat3.style.animation = 'entraCat 1.5s ease forwards'
}
function cerrarMenu(menu, cat1, cat2, cat3){
    menu.style.animation = 'cerrarMenu .5s ease forwards'
    menu.style.opacity = "0";
    cat1.style.animation = 'saleCat 3.0s ease forwards'
    cat2.style.animation = 'saleCat 3.0s ease forwards'
    cat3.style.animation = 'saleCat 3.0s ease forwards'
}



function animarHero(){
  console.log(edifDer);
  edifDer.style.animation = 'animarEdifDer 1s ease-out';
  edifIzq.style.animation = 'animarEdifizq 1s ease-out';
  edifMed.style.animation = 'animarmedio 0.9s ease-out';
  
  spidey.style.animation = 'animarHeromedio 0.5s ease-out';
  red1.style.animation = 'animarHeromedio 0.5s ease-out';
  gwen1.style.animation = 'animarizq 0.9s ease-out';
  miles1.style.animation = 'animar 0.8s ease-out';
  red2.style.animation = 'animar 0.8s ease-out';

}

/* ANIMACION CARGA */
const loader = document.getElementById("loaderNum");

if (loader) {
  const overlay = document.getElementById("overlayCarga");

  function startLoading() {
    let percentage = 0;
    const interval = 50; 

    const updateLoader = setInterval(() => {
      percentage++;
      loader.textContent = `${percentage}%`;
      loader.style.width = `${percentage}%`;

      if (percentage >= 100) {
        clearInterval(updateLoader);
        setTimeout(function() {
          overlay.style.opacity = '0';
          overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
          
          animarHero();

          // Después de que la opacidad sea 0, oculta el overlay
          setTimeout(function() {
            overlay.style.display = 'none';
          }, 500); 
        }, 800); 
      }
    }, interval);
  }


  startLoading();
} 