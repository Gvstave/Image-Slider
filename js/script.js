let slides = [
		'images/slide-1.jpg',
		'images/slide-2.jpg',
		'images/slide-3.jpg',
		'images/slide-4.jpg',
		'images/slide-5.jpg',
		'images/slide-6.jpg',
		'images/slide-7.jpg',
		'images/slide-8.jpg',
		'images/slide-9.jpg'
]

let play = 'play_arrow';
let pause = 'pause'; 
let currentImage = 0;
let sliderImage = document.querySelector('.slider_image');
let prevBtn = document.querySelector('.slider_button-prev');
let nextBtn = document.querySelector('.slider_button-next');
let playBtn = document.querySelector('.slider_button-play');
playBtn.textContent = play;


function nextImage() {
	if(currentImage < slides.length - 1) {
		currentImage++;
	} else {
		currentImage = 0;
	}
	sliderImage.src = slides[currentImage];
}

function prevImage() {
	if (currentImage > 0) {
		currentImage--;
	} else {
		currentImage = slides.length - 1;
	}
	sliderImage.src = slides[currentImage];
}

let interval = null;
function autoplay() {
	if(interval) {
		clearInterval(interval);
		interval = null;
		playBtn.textContent = play
	} else {
		interval = setInterval(() => {
			nextImage();
		}, 2000);	
		playBtn.textContent = pause;
	} 
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
playBtn.addEventListener('click', autoplay);
