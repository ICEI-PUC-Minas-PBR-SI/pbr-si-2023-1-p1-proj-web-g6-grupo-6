function validaDadosUsuario(){

    var usuariosJSON = localStorage.getItem('db_usuarios');
    var emailConfirma = document.getElementById("emailConfirma").value;
    var loginConfirma = document.getElementById("loginConfirma").value;

    var db_usuarios = JSON.parse(usuariosJSON);

    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];
        if (loginConfirma == usuario.login && emailConfirma == usuario.email) {
            return true;
        }
    }

    return false;
}

function direcionaTrocaSenha(){
    var emailConfirma = document.getElementById("emailConfirma").value;
    var loginConfirma = document.getElementById("loginConfirma").value;
        
    if (validaDadosUsuario()){
        window.location = "trocarSenha2.html?email=" + emailConfirma + "&login=" + loginConfirma;
    }else{
        alert("Usuário não encontrado!");
    }
}