var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

//Parte Registro
function cadastrar() {
//campo do nome completo
let nome = document.getElementById('nome').value
//campo do email
let email = document.getElementById('email').value
//campo data de nascimento
let nascimento = document.getElementById('nascimento').value
//campo CEP
let cep = document.getElementById('cep').value
//campo senha
let senha  = document.getElementById('senha').value
//campo confirmar a senha
let confirmsenha = document.getElementById('confirmsenha').value

if (senha != confirmsenha) {
  alert ('As senhas não condizem.');
}
  }
