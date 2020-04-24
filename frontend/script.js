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
    if (done == 0) { alert("[ERROR] Senha ou Usuário inválido."); }

}

// btn da senha

function showPassword() {
    var show = document.getElementById("password");
    var change = document.querySelector("#show");

    if (show.type === "password") {
      show.type = "text";
      change.style.background = "url(https://image.flaticon.com/icons/svg/876/876769.svg)"
    } 
    else {
      show.type = "password";
      change.style.background = "url(https://image.flaticon.com/icons/svg/709/709612.svg)"
    }
}

// btn de trocar sentido

function change() {
  var ul = document.getElementById("lista");
  var sentido = document.getElementById("sense")

  if (ul.classList == 0 ) {
    ul.classList.add("reverse")
    sentido.innerHTML = "Sentido: Central do Brasil (20 pontos)"
  }
  else {
    ul.classList == "reverse";
    ul.classList.remove("reverse")
    sentido.innerHTML = "Sentido: Saracuruna (20 pontos)"
  }
}