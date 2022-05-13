const sliderMain = new Swiper('.slider--main', {
	freeMode: true, //перемотка слайда без привязки к крайней позиции
	centeredSlides: true, //первый слайд находится в центре
	mousewheel: true,//прокрутка мышью
	parallax: true, //паралакс
	breakpoints: { //слайды начинаются в центре экрана
		0: { //от 0px до 680px
			slidesPerView: 2.5,
			spaceBetween: 20 //расстояние между слайдами
		},
		680: {// От 680px до бесконечности
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})