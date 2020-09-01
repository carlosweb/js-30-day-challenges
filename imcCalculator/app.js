let age = document.querySelector('#age')
let weigthValue = document.querySelector('#weigthValue')
let heightValue = document.querySelector('#heightValue')
const box = document.querySelector('.box')
let total = 0

const tasks = document.querySelectorAll('.tasks [name=product]')
const result = document.querySelector('.result')
console.log(tasks)


tasks.forEach(item => {
    const arr = []
    item.addEventListener('click', event => {
        if(event.checked = true){
            console.log(event.target.value)
            
            // const product = event.target.value
            // arr.push(product)
            // const teste = arr.map(item => item * 1)
            // .reduce((acc, tt) => acc + tt, 0)
            // result.innerHTML = `${teste}`
        }
        if(event.checked = false) {
            console.log('teste')
        }
})
})

const getImc = event => {
    event.preventDefault()
    validationForm()
    total = Number(weigthValue.value) / Number(heightValue.value.replace(',', '.')) ** 2
    localStorage.setItem('IMC', total.toFixed(2))
    render()
}

const validationForm = () => {
    const regex = /[0-9]/
    const regexHeight = regex.test(heightValue.value)

    if(age.value > 102) {
        alert('Idade não valida')
    }
    if (heightValue.value === '' || weigthValue.value === '') {
        alert('Preencha os campos')
    }
    if(regexHeight === false){
        alert('digite um numero valido')
    }
}

const limites = [
    {
        descricao: 'Magreza',
        min_value: 0,
        max_value: 18.5,
        function() {
            box.innerHTML = `
            <div class="result">
                <h3>${this.descricao} IMC < 18.5 | PESO < 47.4 Kg </h3>

                O seu IMC é ${Math.trunc(localStorage.getItem('IMC')) } kg/m2!
                <p>Você está abaixo do indice normal, precisa ganhar mais massa.</p>
                <p>De acordo com a sua altura de ${heightValue.value} e idade ${age.value} anos, o seu peso deveria ser no mínimo 60 kg.</p>
            </div>
            `
        }
    },
    {
        descricao: 'Normal',
        min_value: 18.5,
        max_value: 24.9,
        function(){
            box.innerHTML = `
            <div class="result">
                <h3>${this.descricao} IMC 18.5 a 24.9 | PESO 47.4 a 63.7 Kg </h3>
                O seu IMC é ${localStorage.getItem('IMC')} kg/m2! 
                <p>você está dentro do peso adequado</p>
                <p>De acordo com a sua altura: ${heightValue.value} e idade ${age.value}, 
                o seu peso pode variar entre 57 kg e 76 kg, por isso continue tendo cuidado com a 
                alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.</p>
            </div>
            `
        }
    },
    {
        descricao: 'SobrePeso',
        min_value: 24.9,
        max_value: 30,
        function() {
            box.innerHTML = `
            <div class="result">
                <h3>${this.descricao} IMC 24.9 a 30 | PESO 63.7 a 76.8 Kg </h3>
                <p>O seu IMC é ${localStorage.getItem('IMC')} kg/m2 </p>
                <p>Você está acima do peso, talvez seja interessante perder 6kg</p> 
                <p>De acordo com a sua altura: ${heightValue.value} e idade ${age.value}, 
                o seu peso pode variar entre 47 kg e 64 kg, por isso continue tendo cuidado com 
                a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.</p>
            </div>
            `
        }
    },
    {
        descricao: 'Obesidade',
        min_value: 30,
        max_value: 60,
        function(){
            box.innerHTML = `
            <div class="result">
            <h3>${this.descricao} IMC > 30 | PESO > 76.8 Kg </h3>
                <p>O seu IMC é ${localStorage.getItem('IMC')} kg/m2 </p>
                <p>Você está acima do peso, talvez seja interessante perder 6kg</p> 
                <p>De acordo com a sua altura: ${heightValue.value} e idade ${age.value}, 
                o seu peso pode variar entre 60 kg e 81 kg, por isso continue tendo cuidado com a alimentação e 
                praticando atividade física regularmente para manter o peso e prevenir doenças.</p>
            </div>
            `
        }
    }
]

const message = () => {

    limites.filter(limit => {
        if(total > limit.min_value && total < limit.max_value){
            return limit.function()
        }
    })
}

const resetFields = () => {
    age.value = ''
    weigthValue.value = ''
    heightValue.value = ''
}

const render = () => {
    message()
}

document.querySelector('#reset').addEventListener('click', resetFields)
document.querySelector('#result').addEventListener('click', getImc)


