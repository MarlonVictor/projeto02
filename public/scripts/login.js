// btn de cadastro
function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")
}

// btn de entrar
function Login() {
    const username = document.querySelector('#username').value.toLowerCase()
    const password = document.querySelector('#password').value.toLowerCase()

    if (username == "danilo" && password == "marlon") { 
        window.location = "inicio.html"

    } else {
        alert("[ERROR] Senha ou Usuário inválido.")
    }
}

// Mostrar senha
function showPassword() {
    const eye = numb => `url(https://image.flaticon.com/icons/svg${numb}.svg)`

    if (show.type === "password") {
        show.type = "text"
        change.style.background = eye('/876/876769')

    } 
    else {
        show.type = "password"
        change.style.background = eye('/709/709612')
    }
}
