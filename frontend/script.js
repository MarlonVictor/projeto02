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

// Mostrar senha

function showPassword() {
    const show = document.getElementById("password");
          change = document.querySelector("#show");

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
  const ul = document.getElementById("lista");
        sentido = document.getElementById("sense");

  if (ul.classList == 0 ) {
    ul.classList.add("reverse");
    sentido.innerHTML = "Sentido: Central do Brasil (20 pontos)"
  }
  else {
    ul.classList == "reverse";
    ul.classList.remove("reverse");
    sentido.innerHTML = "Sentido: Saracuruna (20 pontos)"
  }
}

// Account

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// Btn de compra

const partida = document.getElementById('p-partida');
const chegada = document.getElementById('p-chegada');
const day = document.getElementById('day');
const printPartida = document.getElementById('partida');
const printChegada = document.getElementById('chegada');
const printDay = document.getElementById('printDay');
const printReward = document.getElementById('reward');
let pontos = 0;

function printData() {
  printPartida.innerHTML = partida.value;
  printChegada.innerHTML = chegada.value;
  printDay.innerHTML = day.value;
}

// Modal de compra

function openModal() {
  document.querySelector('#modal').style.display = 'flex';
  return false;
}
function closeModal() {
  document.querySelector('#modal').style.display = 'none';

  partida.value = '';
  chegada.value = '';
  day.value = '';

  pontos = pontos + 10;
  printReward.innerHTML = pontos;
}

// Animation
const target = document.querySelectorAll('[data-anime]');

window.addEventListener('scroll', function() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(e) {
        if(windowTop > e.offsetTop) 
            e.classList.add('animate');
        else 
            e.classList.remove('animate');
    })
})