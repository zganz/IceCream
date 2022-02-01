(function () {
  function toggle() {
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var modal = document.getElementById('modal');
            modal.classList.toggle('active');
        };

    document.getElementById('about__button').addEventListener('click', toggle, false);
    document.getElementById('modal__button').addEventListener('click', toggle, true);
})();