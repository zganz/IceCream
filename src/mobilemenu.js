(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    //   menu: document.querySelector('[menu-open]'),
      
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
      document.body.classList.toggle('menu-open')
      refs.menu.classList.toggle('is-hidden');
    //   refs.menu.classList.toggle('is-open');
      document.querySelector('.hero').classList.toggle("menu-is-open");
    }
  })();

