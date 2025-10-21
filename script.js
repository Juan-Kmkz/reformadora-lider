function mobileNavbar(mobileMenuSelector, navListSelector, navLinksSelector) {
  const mobileMenu = document.querySelector(mobileMenuSelector);
  const navList = document.querySelector(navListSelector);
  const navLinks = document.querySelectorAll(navLinksSelector);
  const activeClass = "active";

  // Função que anima os links
  function animateLinks() {
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  // Função que lida com o clique do menu
  function handleClick() {
    navList.classList.toggle(activeClass);
    mobileMenu.classList.toggle(activeClass);
    animateLinks();
  }

  // Adiciona evento de clique ao menu
  function addClickEvent() {
    mobileMenu.addEventListener("click", handleClick);
  }

  // Inicializa o menu mobile
  function init() {
    if (mobileMenu) {
      addClickEvent();
    }
  }

  // Retorna funções se quiser acessar depois (ex: destroy, reiniciar etc.)
  return {
    init,
  };
}

// Cria e inicia o menu mobile
const myMobileNavbar = mobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
myMobileNavbar.init();
