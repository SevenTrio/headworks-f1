document.addEventListener("DOMContentLoaded", function() {
	
	var mobileMenu = document.getElementsByClassName('hamburger-menu__container')[0];
	var menuButtonOpen = document.getElementsByClassName('hamburger-menu__button_open')[0];
	var menuButtonClose = document.getElementsByClassName('hamburger-menu__button_close')[0];
	
	menuButtonOpen.onclick = function() {
		window.scrollTo(0, 0);
		mobileMenu.classList.add('hamburger-menu__container_is-active');
		document.body.style.overflowY = 'hidden';
	}	

	menuButtonClose.onclick = function() {
		mobileMenu.classList.remove('hamburger-menu__container_is-active');
		document.body.style.overflowY = '';
	}


});