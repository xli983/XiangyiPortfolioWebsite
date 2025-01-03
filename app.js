const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('#header .header'); 
	const body = document.querySelector('body'); 
  
	if (!body.classList.contains('subpage')) {
	  document.addEventListener('scroll', () => {
		var scroll_position = window.scrollY;
		if (scroll_position > 250) {
		  header.style.backgroundColor = '#1f2741';
		} else {
		  header.style.backgroundColor = 'transparent';
		}
	  });
	}
  });
  

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.querySelectorAll('.project-item').forEach(item => {
	item.addEventListener('click', () => {
		const url = item.getAttribute('data-url');
		if (url) {
		window.location.href = url; // Remove leading "/"
		}
	});
});
  
  
  