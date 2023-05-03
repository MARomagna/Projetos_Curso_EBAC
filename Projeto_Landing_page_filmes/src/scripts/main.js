document.addEventListener("DOMContentLoaded", function () {
  const introducaoSection = document.querySelector(".introducao");
  const alturaIntorducao = introducaoSection.clientHeight;
  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;
    if (posicaoAtual < alturaIntorducao) {
      ocultaElementosHeader;
    } else {
      exibeElementosHeader;
    }
  });
});
function ocultaElementosHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}
function exibeElementosHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}
