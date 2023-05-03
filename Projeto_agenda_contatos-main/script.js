const form = document.getElementById(`form-atividade`);
const cadastrado =
  "<img src=`./imagem/material-de-escritorio.jpg` alt=`AgendaA/>";
const contatos = [];
const telefones = [];
const emails = [];
const enderecos = [];
let linhas = ``;
form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
});
function adicionaLinha() {
  const inputContato = document.getElementById(`contato`);
  const inputTelefone = document.getElementById(`telefone`);
  const inputEmail = document.getElementById(`email`);
  const inputEndereco = document.getElementById(`endereco`);
  if (contatos.includes(inputContato.value)) {
    alert(`Este ${inputContato.value} já existe em sua Agenda`);
  } else {
    contatos.push(inputContato.value);
    telefones.push(parseFloat(inputTelefone));
    emails.push(parseFloat(inputEmail.value));
    enderecos.push(parseFloat(inputEndereco.value));
    let linha = `<tr>`;
    linha += `<td> ${inputContato.value}</td>`;
    linha += `<td> ${inputTelefone.value}</td>`;
    linha += `<td> ${inputEmail.value}</td>`;
    linha += `<td> ${inputEndereco.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
  }
  inputContato.value = ``;
  inputTelefone.value = ``;
  inputEmail.value = ``;
  inputEndereco.value = ``;
}
function atualizaTabela() {
  const corpoTabela = document.querySelector(`tbody`);
  corpoTabela.innerHTML = linhas;
}
function atualizaQuantidade() {
  const quantidadeContato = calculoTotal();
  document.getElementById(`quantidade`).innerHTML;
}
function calculoTotal() {
  let somaContatos = 0;
  for (let i = 0; i < contatos.length; i++) {
    somaContatos += contatos[i];
  }
  return somaContatos + contatos.length;
}
