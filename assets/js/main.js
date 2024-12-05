const header = document.querySelector('.header');
let lastScrollY = window.scrollY; // Posição inicial do scroll

window.addEventListener('scroll', () => {
   const currentScrollY = window.scrollY;

   currentScrollY > lastScrollY
      ? header.classList.remove('active')
      : header.classList.add('active');
   
   lastScrollY = currentScrollY;
});
