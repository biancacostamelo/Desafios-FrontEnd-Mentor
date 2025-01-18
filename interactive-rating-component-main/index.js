let btns = document.querySelectorAll('.btnValue')
let result = document.querySelector('.result-test')
let value = null
const card1 = document.getElementById('card1')

btns.forEach((e) => {
    e.addEventListener('click', () => {
        value = e.value
    })
})

function enviar() {
    if (value) {
        card1.style.display = 'none'
        result.innerHTML = `You selected <span id="number-select">${value}</span> out of 5`
    } else {
        result.innerHTML = `Select a number`
    }
}

