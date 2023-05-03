const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji Selebrando"/>`;
const imgReprovado = `<img src="./images/reprovado.png" alt="Emojidecepcionado"/>`;
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinina = parseFloat(prompt("Digite a nota minima"));
let linhas = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionalinha();
  atualizaTabela();
  atulizaMediaFinal();
});
function adicionalinha() {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");
  if (atividades.includes(inputNomeAtividade.value)) {
    alert("A atividade: ${inputNomeAtividade.value} já foi inserida");
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${
      inputNotaAtividade.value >= notaMinina ? imgAprovado : imgReprovado
    }</td>`;
    linha += `</tr>`;
    linhas += linha;
  }
  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
function atulizaMediaFinal() {
  const mediaFinal = calculaMedia();
  document.getElementById("media-final-valor").innerHTML =
    mediaFinal.toFixed(2);
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaMinina ? spanAprovado : spanReprovado;
}
function calculaMedia() {
  let somaNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }
  return somaNotas / notas.length;
}
