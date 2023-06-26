function exibirUrl() {
    var urlSalva = localStorage.getItem("urlImagem");
    var urlText = document.getElementById("urlText");
    urlText.innerHTML = urlSalva;
  }

const fs = require('fs');

let data = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo"
};

let jsonString = JSON.stringify(data);

fs.writeFile('dados.json', jsonString, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Arquivo JSON criado com sucesso!');
});


function PegarDados()
{
    var dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));

    var urlText = document.getElementById("urlText");
    urlText.innerHTML = dadosArquivados;
}