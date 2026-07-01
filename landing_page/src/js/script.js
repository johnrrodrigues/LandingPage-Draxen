/* =========================================================
   ONEHELP — LANDING PAGE
   Script organizado por seção/funcionalidade.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     --NAVBAR-- (menu mobile)
  ------------------------------------------------------- */
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    const aberto = navbar.classList.toggle("menu-aberto");
    navToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // fecha o menu mobile ao clicar em algum link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("menu-aberto");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* -------------------------------------------------------
     --ANIMAÇÃO DE ENTRADA-- (cards, missão, benefícios, etc.)
     Usa IntersectionObserver para revelar os elementos
     marcados com [data-animate] conforme o usuário rola a página.
  ------------------------------------------------------- */
  const elementosAnimados = document.querySelectorAll("[data-animate]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada, indice) => {
          if (entrada.isIntersecting) {
            setTimeout(() => {
              entrada.target.classList.add("is-visible");
            }, indice * 80);
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementosAnimados.forEach((el) => observer.observe(el));
  } else {
    // fallback para navegadores muito antigos
    elementosAnimados.forEach((el) => el.classList.add("is-visible"));
  }

  /* -------------------------------------------------------
     --IMAGENS-- (aviso caso alguma imagem placeholder não exista)
  ------------------------------------------------------- */
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.alt = "Imagem não encontrada — adicione o arquivo em: " + img.getAttribute("src");
      img.style.background = "#eef6f1";
    });
  });

  /* -------------------------------------------------------
     --BOTÃO VOLTAR AO TOPO--
  ------------------------------------------------------- */
  const botaoTopo = document.getElementById("botaoTopo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      botaoTopo.classList.add("visivel");
    } else {
      botaoTopo.classList.remove("visivel");
    }
  });

  botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});