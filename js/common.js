$(document).ready(function(){
  $(window).scroll(function(){ // check if scroll event happened
  	if($(document).scrollTop() == 0){
  		$(".logoNavbar").css("display", "none");
  	}
    else if($(document).scrollTop() > 50){ // check if user scrolled more than 50 from top of the browser window
      $(".navbar-fixed-top").css("background-color", "#282c37"); 
      $(".logoNavbar").css("display", "inline-block");// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    }else{
      $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent		
    }
  });
  // var list = ["Hola como estas, me llamo Carol", "estudié Diseño Gráfico", 'y hoy en dia estudio Desarrollo Web en LABORATORIA'];  // la lista de textos a mostrar
  var txt = $('#informacion');  // el ID del contenedor
  var options = {
    duration: 2000, // el tiempo que el texto permanecerá visible
    rearrangeDuration: 500, // ella duración del efecto
    effect: 'random', // el efecto que puede ser fadeIn, slideLeft, slideTop o random
    centered: true // si queremos que se centre
  }
  txt.textualizer(options); // enviamos los datos
  txt.textualizer('start'); // y lo ejecutamos

});

