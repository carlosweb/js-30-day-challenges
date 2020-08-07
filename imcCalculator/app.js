let age = document.querySelector('#age')
let weigthValue = document.querySelector('#weigthValue')
let heightValue = document.querySelector('#heightValue')
const box = document.querySelector('.box')
let total = 0

const getImc = (event) => {
    event.preventDefault()
    validationForm()
    total = Number(weigthValue.value) / Number(heightValue.value.replace(',', '.')) ** 2
    localStorage.setItem('IMC', total.toFixed(2))
    render()
}

const validationForm = () => {
    if (heightValue.value === '' || weigthValue.value === '') {
        alert('preencha os campos')
    }
}

const message = () => {
    
   if(total > 0 && total < 18.5){
    box.innerHTML = `
    O seu IMC é ${Math.trunc(localStorage.getItem('IMC')) } kg/m2!
    <p>Você está abaixo do indice normal, precisa ganhar mais massa.</p>
    <p>De acordo com a sua altura de ${heightValue.value} e idade ${age.value} anos, o seu peso deveria ser no mínimo 60 kg.</p>  
   `
   }else if(total > 18.5 && total < 24.9) {
    box.innerHTML = `
    O seu IMC é ${localStorage.getItem('IMC')} kg/m2! 
    <p>você está dentro do peso adequado</p>
    <p>De acordo com a sua altura: ${heightValue.value} e idade${age.value}, o seu peso pode variar entre 57 kg e 76 kg, por isso continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.</p>
   `
   }else if(total > 25.0 && total < 29.9) {
    box.innerHTML = `
    <p>O seu IMC é ${localStorage.getItem('IMC')} kg/m2 </p>
    <p>Você está acima do peso, talvez seja interessante perder 6kg</p> 
    <p>De acordo com a sua altura: ${heightValue.value} e idade ${age.value}, o seu peso pode variar entre 57 kg e 76 kg, por isso continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.</p>
   `
   }
}


const render = () => {
    message()
}

document.querySelector('#result').addEventListener('click', getImc)


