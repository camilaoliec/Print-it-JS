document.addEventListener('DOMContentLoaded',() => {
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Eleménts du DOM
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const image = document.querySelector(".banner-img");
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll(".dot");

// Initialisation de l'index de la dispositive courante
let currentSlide = 0;

// Fonction pour mettre a jour le carousel selon l'index de la dispositive courant
function updateCarousel(){
	image.src = "./assets/images/slideshow/" + slides[currentSlide]["image"];
	bannerText.innerHTML = slides[currentSlide]["tagLine"];
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[currentSlide].classList.add('dot_selected');
}

// Event listener sur chacune des flèches
arrowLeft.addEventListener('click', () => {
	console.log('clique sur la gauche');
	currentSlide = (currentSlide === 0) ? slides.length -1: currentSlide -1;
	updateCarousel();
});

arrowRight.addEventListener('click', () => {
	console.log('Clique sur la droite');
	currentSlide = (currentSlide === slides.length -1) ? 0 : currentSlide + 1; 
	updateCarousel();
});

// // Appel initial pour afficher la première diapositive au chargement de la page
updateCarousel()

});

   