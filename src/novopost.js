function URLValida() {
  var imgURL = document.getElementById("image-url").value;
  try {
    let url = new URL(imgURL);
    return true;
  } catch (err) {
    return false;
  }
}

function habilitaOuDesabilitaBotao() {
  var imgURL = document.getElementById("image-url").value;
  var buttonPostar = document.getElementById("buttonPostar");
  var comentarioTextArea = document.getElementById("comentarioTextArea").value;
  if (imgURL != "" || comentarioTextArea != "") {
    buttonPostar.disabled = false;
  } else {
    buttonPostar.disabled = true;
  }
}

function mostraImagem() {
  var imgURL = document.getElementById("image-url").value;
  var img = document.getElementById("image-preview");
  var labelURLInvalida = document.getElementById("labelURLInvalida");
  if (URLValida()) {
    img.style.display = 'block';
    labelURLInvalida.style.display = 'none';
    img.src = imgURL;
  } else {
    //Se a url fornecida for inválida...
    img.src = "#";
    img.style.display = 'none';
    if (imgURL != "") {
      labelURLInvalida.style.display = 'block';
    }
    else {
      labelURLInvalida.style.display = 'none';
    }
  }
  habilitaOuDesabilitaBotao();
}

function comentarioChange() {
  habilitaOuDesabilitaBotao();
}

function postar() {
  if (!URLValida()) {
    alert("Informe uma URL válida!");
    return;
  }
  else {
    var dados = JSON.stringify($('image-url').val());
    sessionStorage.setItem('chave', dados );
    alert("URL Salva");
    return;
  }
  var imgURL = document.getElementById("image-url").value;
  var comentarioTextArea = document.getElementById("comentarioTextArea").value;
}