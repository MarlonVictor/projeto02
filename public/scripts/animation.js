// btn de trocar sentido
function changeWay() {
    const estacao = e => `Sentido: ${e} (20 pontos)` 
    
    if (ul.classList == '' ) {
        ul.classList.add('reverse')
        sentido.innerHTML = estacao('Central do Brasil')
    }
    else {
        ul.classList == 'reverse'
        ul.classList.remove('reverse')
        sentido.innerHTML = estacao('Saracuruna')
    }
}

// Scroll Animation
window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    
    target.forEach(e => {
        if(windowTop > e.offsetTop) 
            e.classList.add('animate')
        else 
            e.classList.remove('animate')
    })
})
