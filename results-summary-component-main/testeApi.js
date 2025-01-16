const url = './data.json'

async function buscar() {
    try {
        const resposta = await fetch(url)
        const dados = await resposta.json()

        const p1 = document.getElementById('p1')
        const p2 = document.getElementById('p2')
        const p3 = document.getElementById('p3')
        const p4 = document.getElementById('p4')

        p1.innerHTML = `${dados[0].category}`
        document.querySelector('#card1 img').src = dados[0].icon
        document.querySelector('#card1 .paragraph p').innerHTML = `${dados[0].score} / <span>100</span>`

        p2.innerHTML = `${dados[1].category}`
        document.querySelector('#card2 img').src = dados[1].icon
        document.querySelector('#card2 .paragraph p').innerHTML = `${dados[1].score} / <span>100</span>`

        p3.innerHTML = `${dados[2].category}`
        document.querySelector('#card3 img').src = dados[2].icon
        document.querySelector('#card3 .paragraph p').innerHTML = `${dados[2].score} / <span>100</span>`

        p4.innerHTML = `${dados[3].category}`
        document.querySelector('#card4 img').src = dados[3].icon
        document.querySelector('#card4 .paragraph p').innerHTML = `${dados[3].score} / <span>100</span>`
    } catch (error) {
        console.error('erro ao buscar dados', error)
    }
}
buscar()