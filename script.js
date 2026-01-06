

let contador = 0;

const carrinhoTexto = document.getElementById("contador-carrinho");
const botoesComprar = document.querySelectorAll(".btn-comprar");

botoesComprar.forEach(botao => {
  botao.addEventListener("click", () => {
    contador++;
    carrinhoTexto.textContent = `🛒 Carrinho (${contador})`;
    alert("Produto adicionado ao carrinho!");
  });
});

const botoesFiltro = document.querySelectorAll(".filtros button");
const produtos = document.querySelectorAll(".produto");

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filtro;

    produtos.forEach(produto => {
      if (filtro === "todos" || produto.dataset.category === filtro) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  });
});

