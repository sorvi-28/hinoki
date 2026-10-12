const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('header nav');

menuButton.addEventListener('click', function() {
  nav.classList.toggle('open');
  menuButton.classList.toggle('active')
});


const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(function(link) {
link.addEventListener('click', function() {
nav.classList.remove('open');
menuButton.classList.toggle('active')
});
});






const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0,
  rootMargin: '0px 0px 50px 0px'
});

fadeIns.forEach(function(fadeIn) {
  observer.observe(fadeIn);
});



const reservationButton = document.querySelector('.reservation-button');
const reservationForm = document.querySelector('.reservation-form');
const reservationMessage = document.querySelector('.reservation-message');

reservationButton.addEventListener('click', function() {
  reservationForm.classList.toggle('show');
});

reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  reservationMessage.style.display = 'block';


});
 window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});


const logo = document.querySelector('header h1 a');

logo.addEventListener('click', function(event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});