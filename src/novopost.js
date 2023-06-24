window.addEventListener('DOMContentLoaded', () => {

    const uploadForm = document.getElementById('upload-form');

    const imageInput = document.getElementById('image-input');

    const imagePreview = document.getElementById('image-preview');

    const imageFeed = document.getElementById('image-feed');

    uploadForm.addEventListener('submit', (e) => {

      e.preventDefault();

      const file = imageInput.files[0];

      if (file) {

        const reader = new FileReader();

 

        reader.addEventListener('load', () => {

          const imageUrl = reader.result;

          const imageElement = document.createElement('img');

          imageElement.src = imageUrl;

          imageElement.classList.add('uploaded-image');

          imageFeed.appendChild(imageElement);

 

          // Limpar o input de upload de imagem

          imageInput.value = '';

          imagePreview.style.display = 'none';

        });

 

        reader.readAsDataURL(file);

      }

    });

 

    imageInput.addEventListener('change', () => {

      const file = imageInput.files[0];

      if (file) {

        const reader = new FileReader();

 

        reader.addEventListener('load', () => {

          imagePreview.src = reader.result;

          imagePreview.style.display = 'block';

        });

 

        reader.readAsDataURL(file);

      }

    });

  });

 

  function URLValida(){

    var imgURL = document.getElementById("image-url").value;

    try{

      let url = new URL(imgURL);

      return true;

    }catch(err){

      return false;

    }    

  }




  function habilitaOuDesabilitaBotao(){

    var imgURL = document.getElementById("image-url").value;

    var buttonPostar = document.getElementById("buttonPostar");

    var comentarioTextArea = document.getElementById("comentarioTextArea").value;

    if(imgURL != "" || comentarioTextArea != ""){

      buttonPostar.disabled = false;

    }else{

      buttonPostar.disabled = true;

    }

  }




  function mostraImagem(){

    var imgURL = document.getElementById("image-url").value;

    var img = document.getElementById("image-preview");

    var labelURLInvalida = document.getElementById("labelURLInvalida");

    if(URLValida()){

      img.style.display = 'block';

      labelURLInvalida.style.display = 'none';

      img.src = imgURL;

    } else{

      //Se a url fornecida for inválida...

      img.src = "#";

      img.style.display = 'none';      

      if(imgURL != ""){

        labelURLInvalida.style.display = 'block';

      }

      else{

        labelURLInvalida.style.display = 'none';

      }

    }

    habilitaOuDesabilitaBotao();

  }

  function comentarioChange(){

    habilitaOuDesabilitaBotao();

  }

  function postar()

  {

    if(!URLValida()){

      alert("Informe uma URL válida!");

      return;

    }

    var imgURL = document.getElementById("image-url").value;

    var comentarioTextArea = document.getElementById("comentarioTextArea").value;




    //Chamar o CRUDServer para salvar esses dois valores acima

  }