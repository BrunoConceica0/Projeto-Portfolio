function initAnimacaoLink() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  if (linksInternos.length) {
    function animacaoLinks(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const sectionHrefTop = document.querySelector(href).offsetTop;
      window.scrollTo({
        top: sectionHrefTop,
        behavior: "smooth",
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", animacaoLinks);
    });
  }
}
initAnimacaoLink();
