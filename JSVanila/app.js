const box = document.querySelector('.box')
const btSite = document.querySelector('#bt-site')

function openBt() {
    box.classList.toggle('open')
}

btSite.addEventListener('click', openBt)