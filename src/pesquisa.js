// buscador entre as descrições dos posts 

function buscador(){
    fetch('http://localhost:3000/posts')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        const pequisa = document.getElementById('buscador');
        let usuario_buscou = pesquisa.value;

        const link = "resultados_busca.html";

        const link_buscaHTML = document.getElementById("link_buscaHTML");
        link_buscaHTML.setAttribute("href", link );
    })
}