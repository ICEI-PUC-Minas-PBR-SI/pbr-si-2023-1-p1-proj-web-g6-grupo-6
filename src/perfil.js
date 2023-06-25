const form = document.getElementById("form");
const username = document.getElementById("username");
const nomeUsuarioDiv = document.getElementById("nomeUsuarioDiv");
const userbio = document.getElementById("userbio");
const email = document.getElementById("email");
var usuariosJSON = localStorage.getItem('db_usuarios');
var usuarioCorrente = {};

function alteraUsuario(){
  var db_usuarios = JSON.parse(usuariosJSON);

  usuarioCorrente.bio = userbio.value;

  for (var i = 0; i < db_usuarios.usuarios.length; i++) {
      if (usuarioCorrente.id == db_usuarios.usuarios[i].id) {
          db_usuarios.usuarios[i].bio = usuarioCorrente.bio;
      }
  }    

  localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
  localStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
  window.location.href = 'perfil.html';
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

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function main(){
  var usuarioCorrenteJSON = localStorage.getItem('usuarioCorrente');
  if (usuarioCorrenteJSON) {
      usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
  }
 
  console.log(usuarioCorrente);

  username.value = usuarioCorrente.login? usuarioCorrente.login: "";
  email.value = usuarioCorrente.email? usuarioCorrente.email: "";
  userbio.value = usuarioCorrente.bio? usuarioCorrente.bio: "";
  nomeUsuarioDiv.innerHTML = usuarioCorrente.nome? usuarioCorrente.nome: "";

}

main();