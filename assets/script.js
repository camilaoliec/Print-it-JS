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

// Event listener - fleches

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentSlide = 0;
let image = document.querySelector(".banner-img");
let bannerText = document.querySelector('banner p');

function updateCarousel(){
	image.src = "./assets/images/slideshow/" + slides[currentSlide]["image"];
	bannerText.innerHTML = slides[currentSlide]["image"];
}

arrowLeft.addEventListener('click', () => {
	console.log('clique sur la gauche');
	alert('fleche gauche cliqué')
	currentSlide = (currentSlide === 0) ? slides.length -1: currentSlide -1;
	updateCarousel();
});
arrowRight.addEventListener('click', () => {
	console.log('Clique sur la droite');
	alert('Fleche droite cliqué')
	currentSlide = (currentSlide === slides.length -1) ? 0 : currentSlide + 1; 
	updateCarousel();
	console.log('click sur la flece droite');
});

updateCarousel()

});
