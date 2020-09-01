const box = document.querySelector('.box')
const btSite = document.querySelector('#bt-site')

function openBt() {
    box.classList.toggle('open')
}

btSite.addEventListener('click', openBt)

const sumTotal = document.querySelector('.sumTotal')
let input = document.getElementsByName("sumcheckbox");

input.forEach(item => {
    item.addEventListener('click', () => {
        sumCheckBox()
    })
})

const sumCheckBox = () => {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += Number(input[i].value);
      }
    }
    sumTotal.innerHTML = total
  }



  
