
// adicionando o link no botão 
const pesquisa = document.getElementById('buscador');
let usuario_buscou = pesquisa.value;

const link = "pesquisa.html";

const link_buscaHTML = document.getElementById("link_buscaHTML");
link_buscaHTML.setAttribute("href", "pesquisa.html");


// buscador entre as descrições dos posts 
function buscador(){
    fetch('http://localhost:3000/posts')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // a div que deve conter todos os resultados tem id pesquisa_posts
        console.log("teste");
    })
}