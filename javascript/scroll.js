function initScroll() {
  const arial = document.querySelectorAll(".js-scroll");
  if (arial.length) {
    function aria() {
      arial.forEach((container) => {
        const metadeTela = window.innerHeight * 0.6;
        const ariaTop = container.getBoundingClientRect().top - metadeTela;
        if (ariaTop < 0) {
          container.classList.add("ativo");
        }
      });
    }
    aria();
    window.addEventListener("scroll", aria);
  }
}
initScroll();
