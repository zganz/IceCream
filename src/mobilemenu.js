(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    
      
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click',toggleMenu);
  
  function toggleMenu() {
      document.body.classList.toggle('menu-open')
      refs.menu.classList.toggle('is-hidden');
      document.querySelector('.hero').classList.toggle("menu-is-open");
    }
})();
  
;(function (){
  const nav = document.querySelector(".nav__list");
  nav.addEventListener("click", function(ev){
    document.querySelector('.mobile__menu').classList.add("is-hidden");
    document.body.classList.remove('menu-open');
    
    document.querySelector('.hero').classList.toggle("menu-is-open");
    document.querySelector('.backdrop').classList.toggle("menu-is-close");
  });
})();

