let btns = document.querySelectorAll('.btnValue')
let result = document.querySelector('.result-test')
let value = null
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')

btns.forEach((e) => {
    e.addEventListener('click', () => {
        value = e.value
    })
})

function enviar() {
    if (value) {
        card1.style.display = 'none'
        card2.style.display = 'flex'
        result.innerHTML = `You selected <span id="number-select">${value}</span> out of 5`
    } else {
        result.innerHTML = `Select a number`
    }
}

function voltar(){
    card1.style.display = 'flex'
    card2.style.display = 'none'
}

