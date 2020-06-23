
const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')


const cities = [];

fetch(endPoint)
.then(res => res.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex  = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches() {
const matchArray = findMatches(this.value, cities)
const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`)
    return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    
    `
}).join('')
suggestions.innerHTML = html
}
displayMatches()



searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)




// let counter = 0
// let score = 50;

// function teste() {
//     const timer = setInterval(() => {
//         if(counter === score) {
//             clearInterval(timer)
//         }
//         document.querySelector('#counterNum').textContent = `${counter}`
//         counter++
//     }, 50);
// }

// window.addEventListener('Event', teste)




// const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

// const teste = async () => {
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data)
// }

// teste()


