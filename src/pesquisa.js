// garante que carregou tudo 
function ready(fn) {
    if (document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  ready(function () { // aqui dentro vai o codigo que eu preciso 
    // adicionando o link no botão, com o elemento a
    const a = document.getElementById("link_buscaHTML");
    a.setAttribute("href", "pesquisa.html");

    const button = document.getElementById('botaoBuscar');

    function buscador() {

    }
    button.onclick = buscador;
});

