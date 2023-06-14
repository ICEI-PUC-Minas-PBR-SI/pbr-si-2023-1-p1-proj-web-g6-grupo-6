//Parte Registro
//campos registro

const LOGIN_URL = "login.html";

var db_usuarios = {};

var usuarioCorrente = {};


function Login(event) {
  var username = document.getElementById('email').value;
  var password = document.getElementById('senha').value;
  
  if (username && password) {
    window.location.href = 'index.html';
  }
  else { // Se login falhou, avisa ao usuário
    alert('Usuário ou senha incorretos');
  }
}

function Valida(event){
            let nome   = document.getElementById('nome').value;
            let email  = document.getElementById('email0').value;
            let birth  = document.getElementById('nascimento').value;
            let cep  = document.getElementById('cep').value;
            let senha0  = document.getElementById('senha0').value;
            let senha1 = document.getElementById('senha1').value;
            console.log(`Nome: ${nome} Email: ${email0} Aniversário: ${birth} CEP:${cep}`)

            if (nome == "" || email =="" || birth == "" || cep == "" || senha0 == "" || senha1 == "") {
              alert('Preencha todos os campos')
            }else if (senha0 != senha1){
              alert('senhas não correspondem')
            }else{
              alert (`Seja muito Bem-vindo ${nome}`);
              window.location.href = 'index.html'
            }
}




function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}