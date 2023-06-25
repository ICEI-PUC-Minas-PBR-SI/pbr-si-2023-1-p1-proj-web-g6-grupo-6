// puxando os posts para criar a tela inicial 
fetch('http://localhost:3000/posts')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
    const todosPosts = document.querySelector('#posts'); // criei uma constante que recebe o elemento div que irá receber todos os posts

    for(var i=0; i<9; i++){ // criando uma repetição com 9 posts para serem exibidos 

        const div_post = document.createElement ('div'); // vou criar uma div para cada post 
        todosPosts.appendChild(div_post); // fazer a div que criei para cada post ser filha da div com todos os posts 

        // adicionando a imagem
        const imagem = document.createElement('img');
        imagem.setAttribute('src', data[i].imagem);
               
        // fazendo os elementos necessários serem filho da div que contem os dados de cada post 
        div_post.appendChild (imagem);

    }
    })