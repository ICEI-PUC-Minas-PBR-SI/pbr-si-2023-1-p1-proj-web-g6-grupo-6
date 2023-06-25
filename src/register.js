const LOGIN_URL = "login.html";
var db_usuarios = {};
var usuarioCorrente = {};

function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
const dadosIniciais = {
    usuarios: [
        { "id": generateUUID (), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com", "bio": "Bio do Usuário Admin", "img": ""},
        { "id": generateUUID (), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com", "bio": "Bio do Usuário User", "img": ""},
    ]
};

function initLoginApp () {
    var usuarioCorrenteJSON = localStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    }
    var usuariosJSON = localStorage.getItem('db_usuarios');

    if (!usuariosJSON) { 
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');
        db_usuarios = dadosIniciais;
        localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
    }
    else  { 
        db_usuarios = JSON.parse(usuariosJSON);    
    }
};
function loginUser (login, senha) {
    console.log(db_usuarios);
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.bio = usuario.bio;
            usuarioCorrente.img = usuario.img;
            
            localStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
            return true;
        }
    }

    return false;
}


function logoutUser () {
    usuarioCorrente = {};
    localStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser (nome, login, senha, email) {

    let newId = generateUUID ();
    let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email, "bio": '', "img": '' };

    db_usuarios.usuarios.push (usuario);

    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

function setUserPass () {

}
initLoginApp ();





        

