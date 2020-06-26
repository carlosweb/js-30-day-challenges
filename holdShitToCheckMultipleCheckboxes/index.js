const  checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
let lastChecked


function handleCheck(e) {
    let inBetwen = false
    if (e.shiftKey && this.checked){

        checkboxes.forEach(checkbox => {
            if(checkboxes === this || checkbox === lastChecked) {
                inBetwen = !inBetwen
            }
            if(inBetwen) {
                checkbox.checked = true
            }
        })
    }
    lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))