const form = document.getElementById("form");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
var usuariosJSON = localStorage.getItem('db_usuarios');
var emailConfirma;
var loginConfirma

function main(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    emailConfirma = url.searchParams.get("email");
    loginConfirma = url.searchParams.get("login");
    
    var db_usuarios = JSON.parse(usuariosJSON);
    var nomeUsuario;

    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
        if (loginConfirma == usuario.login && emailConfirma == usuario.email) {
            nomeUsuario = usuario.nome;
        }
    }
    document.getElementById("nomeUsuario").innerHTML = nomeUsuario;
}

function executaTrocaSenha(){
    if(!checkInputs())
        return;
    
    var db_usuarios = JSON.parse(usuariosJSON);       

    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        if (loginConfirma == db_usuarios.usuarios[i].login && emailConfirma == db_usuarios.usuarios[i].email) {
            db_usuarios.usuarios[i].senha = password.value;
        }
    }

    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
    window.location = "trocarSenha3.html";
}


function checkInputs() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (passwordValue === "") {
      setErrorFor(password, "A nova senha é obrigatória.");
    } else if (passwordValue.length < 7) {
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
      setSuccessFor(password);
    }
  
    if (passwordConfirmationValue === "") {
      setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue.length < 7) {
        setErrorFor(passwordConfirmation, "A senha precisa ter no mínimo 7 caracteres.");      
    } else if (passwordConfirmationValue !== passwordValue) {
      setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
      setSuccessFor(passwordConfirmation);
    }
  
    const formControls = form.querySelectorAll(".form-control");
  
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    return formIsValid;
  }


  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
  }

main();