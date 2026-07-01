// Nossa História — script simples
// Se a imagem do cão não existir, mostra um aviso no lugar dela

document.addEventListener("DOMContentLoaded", () => {
  const foto = document.querySelector(".historia__foto");

  foto.addEventListener("error", () => {
    foto.alt = "Adicione a foto do cão em: img/dog.jpg";
    foto.style.background = "#eef6f1";
  });
});
