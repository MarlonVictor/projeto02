// btn de cadastro

function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}

// btn de entrar

function Login() {
    var done = 0;
    var username = document.login.username.value;
    username = username.toLowerCase();
    var password = document.login.password.value;
    password = password.toLowerCase();
    if (username == "danilo" && password == "marlon") { window.location = "inicio.html"; done = 1; }
    if (done == 0) { alert("Senha ou Usuário inválido."); }
}
