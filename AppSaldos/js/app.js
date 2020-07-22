let saldoTotal = document.querySelector('#saldo_total')
let totalGanhos = document.querySelector('#total-ganhos')

function getSaldo() {
  var values = localStorage.getItem("saldo")
  localStorage.setItem("saldo", valorSaldo)
  saldoTotal.innerHTML = values 
  verificaSaldo()
}

valorSaldo = 0



function verificaSaldo() {
  if(String(valorSaldo).indexOf("-") != -1) {
    saldoTotal.style.color = "red"
  }else{
    saldoTotal.style.color = "green"
  }
}

function updateSaldo(type) {
  if (type === "diminuir") {
    let valor = document.querySelector('#despesas').value
    valorSaldo = parseInt(valorSaldo) - parseInt(valor)
    getSaldo()
    document.querySelector('#despesas').value = ""
  }else if(type === "aumentar") {
    let valor = document.querySelector('#ganhos').value
    valorSaldo = parseInt(valorSaldo) + parseInt(valor)
    getSaldo()
    document.querySelector('#ganhos').value = ""
  }
}



// let despesas = document.querySelector('#despesas')
// let array1 = []
// let array2 = []


// async function getGanhos(e) {
// let ganhos = document.querySelector('#ganhos')
//   e.preventDefault()
//   if(ganhos.value == 0 || ganhos.value == null) {
//     alert('Campo Vazio, insira um valor')
//   }else{
//       let num = array1
//       array1.push(ganhos.value)

//     const list = document.querySelector('#list2')
//     const text2 = document.createElement("li")
//     text2.textContent = `R$ ${ganhos.value}`
//     list.appendChild(text2)
//     totalGanhos.innerHTML = ` Ganhos R$ ${array1.reduce((acc, item) => parseInt(acc) + parseInt(item), 0)}` 
//   }
//   // updateSaldo()
// }

// let arr = [10, 20, 30, 40]
// const somaGanhos = arr.reduce((acc, item) => acc + item, 0) 

// console.log(somaGanhos)





// function getDespesas(e) {
//     e.preventDefault()
//   let despesas = document.querySelector('#despesas')
//   if(despesas.value == 0 || despesas.value == null) {
//     alert('Campo Vazio, insira um valor')
//   }else{
//     let num2 = array2
//     array2.push(despesas.value)

//     const list = document.querySelector('#list')
//     const text = document.createElement("li")
//     text.textContent = `R$ ${despesas.value}`
//     list.appendChild(text)

//     var valor2 = 0
//     for(var i = 0; i < num2.length;i++){
//         valor2 = parseInt(valor2) + parseInt(num2[i])
//         totalDespesas.innerHTML = `Gastos R$ ${valor2}`
//     }
//   }
//   updateSaldo()
// }

// function updateSaldo(numero, numero2, num, num2) {
//   numero = ganhos.value
//   numero2 = despesas.value
//   num = array1
//   num2 = array2
//   let valorTotal = 0

  
//   if(numero) {
//     for(var i = 0; i < num.length;i++) {
//       teste = parseInt(valorTotal) + parseInt(num[i])
//       console.log(teste)
//       saldoTotal.innerHTML = `Valor total R$ ${teste}`
//       }
//     }else if(numero2) {
//         for(var i = 0; i < num2.length;i++) {
//         teste = valorTotal - num2[i]
//         console.log(teste)
//         saldoTotal.innerHTML = `Valor total R$ ${teste}`
//       }
//     }else{
//       saldoTotal.innerHTML = "ERROR"
//     }
//   }




// -------------------------------------------------------------------

//   num = array1
//   num2 = array2
//   numero = ganhos.value

//   numero2 = 20

// valor = 0
//   if(numero){
//     valor = parseInt(numero) + parseInt(valor)
//     // saldoTotal.innerHTML = `${valor}`
//     }

  
  

// function verificarSaldo(texto) {
//     if(String(saldo).indexOf('-') != -1) {
//         texto.style.color = "red"
//     }else if(String(saldo) > 0) {
//         texto.style.color = "green"
//     }
//     getSaldoTotal()
// }

// function getSaldoTotal() {
//     let saldoTotal = document.querySelector('#salto_total')
//     let saldo = 10
//     saldoTotal.innerHTML = `R$ ${saldo}`
    
// verificarSaldo()
//   }
//   getSaldoTotal()



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
// document.querySelector('#bt_ganhos').addEventListener('click', getGanhos)
// document.querySelector('#bt_despesas').addEventListener('click', updateSaldo)












