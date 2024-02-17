const hamburger = document.querySelector('.hamburger');
const burgerLinks = document.querySelector('.burgerlinks');
let burgerOpen = false;
hamburger.addEventListener('click', () => {
  if(!burgerOpen) {
    hamburger.classList.add('open');
    burgerLinks.classList.add('open');
    burgerOpen = true;
  } else {
    hamburger.classList.remove('open');
    burgerLinks.classList.remove('open');
    burgerOpen = false;
  }
});



 
