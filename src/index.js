// puxando os posts para criar a tela inicial 
fetch('http://localhost:3000/posts')
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        console.log(data);
        const todosPosts = document.querySelector('#posts'); // criei uma constante que recebe o elemento div que irá receber todos os posts    

        for(var i=0; i<9; i++){ // criando uma repetição com 9 posts para serem exibidos 

            const div_post = document.createElement ('div'); // vou criar uma div para cada post 
            todosPosts.appendChild(div_post); // fazer a div que criei para cada post ser filha da div com todos os posts 

            // fazendo pegar sempre os últimos 
            var j = data.length - i;
            console.log(j);

            /*
            // adicionando a imagem
            const imagem = document.createElement('img');
            imagem.setAttribute('src', "data[j].imagem");
            */

            // adicionando o nome do perfil como h3
            const perfil = document.createElement('h3');
            perfil.innerHTML = data[j].perfil;

            // adicionando legenda 
            const legenda = document.createElement('p');
            legenda.innerHTML = data[j].legenda;
            
            // fazendo os elementos necessários serem filho da div que contem os dados de cada post 
            //div_post.appendChild (imagem); 
            div_post.appendChild (perfil);
            div_post.appendChild (legenda);

        }   
    })

// buscador entre as descrições dos posts 