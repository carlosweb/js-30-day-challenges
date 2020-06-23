let saldo = localStorage.getItem("saldo")
localStorage.setItem("saldo", saldo)

const getSaldo = () => {
  var text = document.querySelector('.valor')
  text.innerHTML = `R$ ${valorSaldo}`

  if(String(valorSaldo) < 0) {
      text.style.color = 'red'
  }else{
    text.style.color = 'green'
  }
}

function updatesaldo(type){
  if(type === 'dimunuir'){
    var valor = document.querySelector('#despesa').value
    valor === "" && valor === null ?  saldo = 0 : true
    valorSaldo = parseInt(valorSaldo) - parseInt(valor) 
    getSaldo()
   
  }else if(type === 'adicionar') {
    var valor = document.querySelector('#ganho').value
    valor === "" && valor === null ?  saldo = 0 : true
    valorSaldo = parseInt(valorSaldo) + parseInt(valor) 
    getSaldo()
  }
}

updatesaldo(0)






