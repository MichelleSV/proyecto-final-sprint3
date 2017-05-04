var nav = document.getElementById("nav");
var btnPink = document.getElementById("button-pink");
var logo = document.getElementsByClassName("logo")[0].children[0];

function scrollFunction() {
	var scr = window.pageYOffset;
	console.log(scr);
	if(scr>100){
		nav.classList.remove("nav-transparent");
		nav.classList.add("nav-white");
		btnPink.classList.remove("hidden");
		logo.setAttribute("src", "assets/img/logo-pink.png")
	}else{
		nav.classList.add("nav-transparent");
		nav.classList.remove("nav-white");
		btnPink.classList.add("hidden");
		logo.setAttribute("src", "assets/img/logo-white.png");
	}
}
window.onscroll = scrollFunction;


var inputPhone = document.getElementById("input-phone");
function formulario(){
	this.nextElementSibling.classList.remove("display-none");
	/*anadiendo a app*/
	this.parentElement.parentElement.parentElement.nextElementSibling.classList.add("top-cuatro");
	/*anadiendo a hero*/
	this.parentElement.parentElement.parentElement.classList.add("top-cero");
	/*anadiendo a div que contiene al form*/
	this.parentElement.parentElement.classList.add("top-treintaysiete");
	/*anadiendo a video 1*/
	this.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add("top-cuatro")
	/*anadiendo a .video-2*/
	this.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("top-unopuntotres");
	/*anadiendo a .video-3*/
	this.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("top-unopuntoocho");
	/*anadiendo a #blanco*/
	this.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("nuevo-height");
	/*anadiendo a .hero div:nth-child(3)*/
	this.parentElement.parentElement.parentElement.children[2].classList.add("botton-cero");
}
inputPhone.onfocus = formulario;

var telefono =document.getElementById("input-phone");
telefono.onblur=function(){
	var regexNumeros = /9[0-9]{8}$/;
	if(regexNumeros.test(this.value) && this.value.length!==0){
		this.classList.remove("equis")
	}
	else{
		this.classList.add("equis")
	}
}
var email =document.getElementById("input-email");
email.onblur=function(){
	var regexCorreo = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
	if(regexCorreo.test(this.value) && this.value.length!==0){
		this.classList.remove("equis")
	}
	else{
		this.classList.add("equis")
	}
}
var soloLetras = function(){
	var regexLetras=/[A-Z]{1}[a-z]+$/;
	if(regexLetras.test(this.value) && this.value.length!==0){
		this.classList.remove("equis")

	}
	else{
		this.classList.add("equis")
	}
}
var nombre = document.getElementById("input-name");
nombre.onblur=soloLetras;
var ciudad = document.getElementById("input-ciudad");
ciudad.onblur=soloLetras;
