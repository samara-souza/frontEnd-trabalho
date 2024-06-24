// Carrega os produtos do Local Storage
let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

// Adiciona opções ao select de nome do produto
const nomeSelect = document.getElementById("nome");
produtos.forEach(p => {
  const option = document.createElement("option");
  option.value = p.nome;
  option.text = p.nome;
  nomeSelect.appendChild(option);
});

// Função para preencher os campos de código e valor com base no nome do produto
function preencherCampos(nome) {
  const produto = produtos.find(p => p.nome === nome);
  if (produto) {
    document.getElementById("codigo").value = produto.codigo;
    document.getElementById("valor").value = produto.valor;
  }
}

// Função para atualizar a quantidade do produto no Local Storage
function atualizarQuantidade(codigo, quantidade) {
  const produto = produtos.find(p => p.codigo === parseInt(codigo));
  if (produto) {
    produto.quantidade -= quantidade;
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }
}

// Adiciona evento de change ao campo de código do produto
document.getElementById("codigo").addEventListener("change", function() {
  const codigo = this.value;
  const produto = produtos.find(p => p.codigo === parseInt(codigo));
  if (produto) {
    document.getElementById("nome").value = produto.nome;
    document.getElementById("valor").value = produto.valor;
  }
});

// Adiciona evento de change ao campo de nome do produto (select)
nomeSelect.addEventListener("change", function() {
  const nome = this.value;
  preencherCampos(nome);
});

// Adiciona evento de submit ao formulário
document.getElementById("form-altera").addEventListener("submit", function(event) {
  event.preventDefault();
  const codigo = document.getElementById("codigo").value;
  const quantidade = document.getElementById("quantidade").value;
  atualizarQuantidade(codigo, quantidade);
  // Limpa os campos do formulário
  document.getElementById("codigo").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("quantidade").value = "";
});




















// // Carrega os produtos do Local Storage
// let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

// // Função para preencher os campos de nome e valor com base no código do produto
// function preencherCampos(codigo) {
//   const produto = produtos.find(p => p.codigo === parseInt(codigo));
//   if (produto) {
//     document.getElementById("nome").value = produto.nome;
//     document.getElementById("valor").value = produto.valor;
//   } else {
//     // Se o código não for encontrado, exibe a lista de produtos como opções
//     const nomeInput = document.getElementById("nome");
//     const select = document.createElement("select");
//     select.id = "nome";
//     produtos.forEach(p => {
//       const option = document.createElement("option");
//       option.value = p.nome;
//       option.text = p.nome;
//       select.appendChild(option);
//     });
//     nomeInput.parentNode.replaceChild(select, nomeInput);
//   }
// }

// // Função para atualizar a quantidade do produto no Local Storage
// function atualizarQuantidade(codigo, quantidade) {
//   const produto = produtos.find(p => p.codigo === parseInt(codigo));
//   if (produto) {
//     produto.quantidade -= quantidade;
//     localStorage.setItem('produtos', JSON.stringify(produtos));
//   }
// }

// // Adiciona evento de change ao campo de código do produto
// document.getElementById("codigo").addEventListener("change", function() {
//   const codigo = this.value;
//   preencherCampos(codigo);
// });

// // Adiciona evento de change ao campo de nome do produto (select)
// document.addEventListener("DOMContentLoaded", function() {
//   const nomeSelect = document.getElementById("nome");
//   if (nomeSelect.tagName === "SELECT") {
//     nomeSelect.addEventListener("change", function() {
//       const nome = this.value;
//       const produto = produtos.find(p => p.nome === nome);
//       if (produto) {
//         document.getElementById("codigo").value = produto.codigo;
//         document.getElementById("valor").value = produto.valor;
//       }
//     });
//   }
// });

// // Adiciona evento de submit ao formulário
// document.getElementById("form-altera").addEventListener("submit", function(event) {
//   event.preventDefault();
//   const codigo = document.getElementById("codigo").value;
//   const quantidade = document.getElementById("quantidade").value;
//   atualizarQuantidade(codigo, quantidade);
//   // Limpa os campos do formulário
//   document.getElementById("codigo").value = "";
//   document.getElementById("nome").outerHTML = "<input id='nome' name='nome' type='text' placeholder='Digite o nome do produto' class='campo campo-medio'>";
//   document.getElementById("valor").value = "";
//   document.getElementById("quantidade").value = "";
// });
















// // // Carrega os produtos do Local Storage
// // let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

// // // Função para preencher os campos de nome e valor com base no código do produto
// // function preencherCampos(codigo) {
// //   const produto = produtos.find(p => p.codigo === parseInt(codigo));
// //   if (produto) {
// //     document.getElementById("nome").value = produto.nome;
// //     document.getElementById("valor").value = produto.valor;
// //   } else {
// //     // Se o código não for encontrado, exibe a lista de produtos como opções
// //     const select = document.getElementById("nome");
// //     select.type = "select-one";
// //     select.innerHTML = "";
// //     produtos.forEach(p => {
// //       const option = document.createElement("option");
// //       option.value = p.nome;
// //       option.text = p.nome;
// //       select.appendChild(option);
// //     });
// //   }
// // }

// // // Função para atualizar a quantidade do produto no Local Storage
// // function atualizarQuantidade(codigo, quantidade) {
// //   const produto = produtos.find(p => p.codigo === parseInt(codigo));
// //   if (produto) {
// //     produto.quantidade -= quantidade;
// //     localStorage.setItem('produtos', JSON.stringify(produtos));
// //   }
// // }

// // // Adiciona evento de change ao campo de código do produto
// // document.getElementById("codigo").addEventListener("change", function() {
// //   const codigo = this.value;
// //   preencherCampos(codigo);
// // });

// // // Adiciona evento de change ao campo de nome do produto (select)
// // document.getElementById("nome").addEventListener("change", function() {
// //   const nome = this.value;
// //   const produto = produtos.find(p => p.nome === nome);
// //   if (produto) {
// //     document.getElementById("codigo").value = produto.codigo;
// //     document.getElementById("valor").value = produto.valor;
// //   }
// // });

// // // Adiciona evento de submit ao formulário
// // document.getElementById("form-altera").addEventListener("submit", function(event) {
// //   event.preventDefault();
// //   const codigo = document.getElementById("codigo").value;
// //   const quantidade = document.getElementById("quantidade").value;
// //   atualizarQuantidade(codigo, quantidade);
// //   // Limpa os campos do formulário
// //   document.getElementById("codigo").value = "";
// //   document.getElementById("nome").value = "";
// //   document.getElementById("valor").value = "";
// //   document.getElementById("quantidade").value = "";
// // });