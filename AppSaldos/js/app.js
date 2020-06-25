let saldoTotal = document.querySelector('#salto_total')
let totalGanhos = document.querySelector('#total-ganhos')
let totalDespesas = document.querySelector('#total-despesas')

let despesas = document.querySelector('#despesas')
let array1 = []
let array2 = []

function getGanhos(e) {
let ganhos = document.querySelector('#ganhos')
  e.preventDefault()
  if(ganhos.value == 0 || ganhos.value == null) {
    alert('Campo Vazio, insira um valor')
  }else{
      let num = array1
      array1.push(ganhos.value)

    const list = document.querySelector('#list2')
    const text2 = document.createElement("li")
    text2.textContent = `R$ ${ganhos.value}`
    list.appendChild(text2)

    var valor = 0
    for(var i = 0; i < num.length;i++){
        valor = parseInt(valor) + parseInt(num[i])
        totalGanhos.innerHTML = `Ganhos R$ ${valor}`
    }
  }
}

function getDespesas(e) {
    e.preventDefault()
  let despesas = document.querySelector('#despesas')
  if(despesas.value == 0 || despesas.value == null) {
    alert('Campo Vazio, insira um valor')
  }else{
    let num2 = array2
    array2.push(despesas.value)

    const list = document.querySelector('#list')
    const text = document.createElement("li")
    text.textContent = `R$ ${despesas.value}`
    list.appendChild(text)

    var valor2 = 0
    for(var i = 0; i < num2.length;i++){
        valor2 = parseInt(valor2) + parseInt(num2[i])
        totalDespesas.innerHTML = `Gastos R$ ${valor2}`
    }
  }
}

function verificarSaldo(texto) {
    if(String(saldo).indexOf('-') != -1) {
        texto.style.color = "red"
    }else if(String(saldo) > 0) {
        texto.style.color = "green"
    }
    getSaldoTotal()
}

function getSaldoTotal() {
    let saldoTotal = document.querySelector('#salto_total')
    let saldo = 10
    saldoTotal.innerHTML = `R$ ${saldo}`
    
verificarSaldo()
  }
  getSaldoTotal()



// function testaCampo() {
//   let ganhos = document.querySelector('#ganhos')
//   if(ganhos == 0 || ganhos == null) {
//     console.log('true')
//   }else{
//     console.log(false)
//   }
//   somaValores()
// }






// function verificarSaldo(){
//   if(String(saldoTotal) > 0){
//     saldoTotal.style.color = "green"
//   }else{
//     saldoTotal.style.color = "red"
//   }
// }

// document.querySelector('#add').addEventListener('click', somaValores)
document.querySelector('#bt_ganhos').addEventListener('click', getGanhos)
document.querySelector('#bt_despesas').addEventListener('click', getDespesas)












