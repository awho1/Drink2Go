let mainMenu = document.querySelector('.main-menu');
let menuButton = document.querySelector('.nav-user__button-menu');
let closeButton = document.querySelector('.nav-user__button-close');

mainMenu.classList.remove('main-menu--no-js');

menuButton.addEventListener('click', function() {
  mainMenu.classList.remove('main-menu--closed');
  mainMenu.classList.add('main-menu--opened');
  menuButton.classList.remove('nav-user__button--opened');
  menuButton.classList.add('nav-user__button--closed');
  closeButton.classList.add('nav-user__button--opened');
});

closeButton.addEventListener('click', function() {
  mainMenu.classList.remove('main-menu--opened');
  mainMenu.classList.add('main-menu--close');
  closeButton.classList.remove('nav-user__button--opened');
  closeButton.classList.add('nav-user__button--closed');
  menuButton .classList.add('nav-user__button--opened');
});
