window.addEventListener("load", function(){
  var iconoMenu = document.getElementById("iconoMenu");
  var iconoCruz = document.getElementById("iconoCruz");
  var botonCerrar = document.getElementById("botonCerrar");
  var informacion = document.getElementById("informacion");
  var menuDesplegable = document.getElementById("menuDesplegable");
  var infoAbout = document.getElementById("infoAbout");
  var aboutBotton = document.getElementById("aboutBotton");

   iconoMenu.addEventListener("click", menu);
   iconoCruz.addEventListener("click", menuHidden);
   botonCerrar.addEventListener("click", aboutHidden);
   aboutBotton.addEventListener("mouseover", aboutMe);

});

function menu(e){
	e.preventDefault();
	menuDesplegable.classList.remove("hidden");
}
function menuHidden(){
	menuDesplegable.classList.add("hidden");
}
function aboutMe(){
	infoAbout.classList.remove("hidden");
	aboutBotton.classList.add("hidden");
  informacion.classList.add("hidden");
}
function aboutHidden(){
	infoAbout.classList.add("hidden");
	aboutBotton.classList.remove("hidden");
  informacion.classList.remove("hidden");
}


