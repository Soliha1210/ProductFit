if (document.querySelector('.slider__logo')){
	
new Splide( '.slider__logo', {
	type   : 'loop',
	rewind:true,
	autoplay:true,
	perPage:3,
	interval:2000,
	pagination:false,
	arrows:false
	
} ).mount();
}

if (document.querySelector('.slider2')){
new Splide( '.slider2', {
	type   : 'loop',
	rewind:true,
	autoplay:true,
	perPage:1,
	interval:2000,
	
} ).mount();
}

