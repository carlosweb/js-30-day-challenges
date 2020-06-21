const panels = document.querySelectorAll('.panel')

function ToggleOpen() {
    this.classList.toggle('open')
}

function ToggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', ToggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', ToggleActive))


