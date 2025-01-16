// parentnode
// nextElementSibling

// areaRes = {display: none;}
// areaResBlock = {display: block;}

const bnt = document.querySelectorAll('.areaAsk')

bnt.forEach((btn) => {
    btn.addEventListener('click', () => {
        const areaRes = btn.nextSibling.nextSibling

        if (areaRes.classList.contains('areaRes')) {
            areaRes.classList.remove('areaRes')
            areaRes.classList.add('areaResBlock')
        } else {
            areaRes.classList.remove('areaResBlock')
            areaRes.classList.add('areaRes')
        } 
    })
})
