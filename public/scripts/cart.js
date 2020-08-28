// Btn de compra
let pontos = 0

function printData() {
    printPartida.innerHTML = partida.value
    printChegada.innerHTML = chegada.value
    printDay.innerHTML = day.value
}

// Modal de compra
function openModal() {
    document.querySelector('#modal').style.display = 'flex'
    return false
}

function closeModal() {
    document.querySelector('#modal').style.display = 'none'

    partida.value = ''
    chegada.value = ''
    day.value = ''

    pontos = pontos + 10
    printReward.innerHTML = pontos
}
