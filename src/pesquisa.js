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
        // pegando o que o usuario digitou 
        const inputHTML = document.getElementById('input');
        const usuario_buscou = inputHTML.value;
        console.log(usuario_buscou);


        fetch('http://localhost:3000/posts')
        .then((response) => {
            console.log(response);
            console.log("teste fecth");
            return response.json()

        })
        .then((data) => {
            console.log(data);
            console.log("teste fetch");
        })
    }

    button.onclick = buscador;
});

