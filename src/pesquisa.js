function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// garante que carregou tudo 

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () { // aqui dentro vai o codigo que eu preciso 


    var foo = getParameterByName('search');
    document.getElementById("input").value = foo;

    console.log(foo);

    /*
    // puxando os posts para criar a tela inicial 
    fetch('http://localhost:3000/posts')
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            const todosPosts = document.querySelector('#posts'); // criei uma constante que recebe o elemento div que irá receber todos os posts    

            for (var i = 0; i < data.length; i++) { // criando uma repetição com 9 posts para serem exibidos 
                var legenda = data[i].legenda.toLowerCase();
                if(legenda.search(foo) != -1){

                const div_post = document.createElement('div'); // vou criar uma div para cada post 
                todosPosts.appendChild(div_post); // fazer a div que criei para cada post ser filha da div com todos os posts 

                // adicionando a imagem
                const imagem = document.createElement('img');
                imagem.setAttribute('src', data[i].imagem);

                // adicionando o nome do perfil como h3
                const perfil = document.createElement('h3');
                perfil.innerHTML = data[i].perfil;

                // adicionando legenda 
                const legenda = document.createElement('p');
                legenda.innerHTML = data[i].legenda;

                // fazendo os elementos necessários serem filho da div que contem os dados de cada post 
                div_post.appendChild(imagem);
                div_post.appendChild(perfil);
                div_post.appendChild(legenda);

            }
        }
        }) */



        function apagarImagem(id) {
            // Fazer uma requisição DELETE para o servidor para remover a imagem pelo ID
            fetch("http://localhost:3000/imagens/" + id, {
                method: "DELETE"
            })
                .then(function (response) {
                    // Verificar se a requisição foi bem-sucedida
                    if (response.ok) {
                        // Remover a div da imagem da página HTML
                        var div = document.getElementById("imagem-" + id);
                        div.remove();
                    } else {
                        throw new Error("Erro ao apagar a imagem.");
                    }
                })
                .catch(function (error) {
                    alert(error.message);
                });
        } 
        // Obtém os dados salvos no localStorage
        var dadosArmazenados = localStorage.getItem("dados");
        
        // Verifica se existem dados salvos
        if (dadosArmazenados) {
               
            // Converte os dados de JSON para um array
            var dados = JSON.parse(dadosArmazenados);
            console.log(dados);
        
            // Obtém a referência do elemento para exibir as imagens, textos e opções
            var conteudo = document.getElementById("conteudo");
        
            // Itera sobre os dados e cria os elementos para exibir as imagens, textos e opções
            //dados.forEach(function (objetoImagemTexto) {

                const todosPosts = document.querySelector('#posts'); // criei uma constante que recebe o elemento div que irá receber todos os posts    

            for (var i=0; i<dados.length; i++){ 
           // function(objetoImagemTexto){
                if(dados[i].texto.search(foo) != -1){
                    console.log(dados[i].texto);

                    const div_post = document.createElement('div'); // vou criar uma div para cada post 
                todosPosts.appendChild(div_post); // fazer a div que criei para cada post ser filha da div com todos os posts 

                    // adicionando legenda 
                    const legenda = document.createElement('p');
                    legenda.innerHTML = dados[i].texto;

                    // adicionando a imagem
                    const imagem = document.createElement('img');
                    imagem.setAttribute('src', dados[i].urlImagem);

                    // fazendo os elementos necessários serem filho da div que contem os dados de cada post 
                    div_post.appendChild(imagem);
                    div_post.appendChild(legenda);

                }
            };
        }
        

});

