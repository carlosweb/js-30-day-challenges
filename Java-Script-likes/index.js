
const channels = [
    {
        name: 'devSoutinho',
        likes: 0
    },
    {
        name: 'Alura',
        likes: 0
    },
    {
        name: 'FrontIn',
        likes: 0
    },
    {
        name: 'Instagram',
        likes: 0
    },
    {
        name: 'GitHub',
        likes: 0
    },
    {
        name: 'LinkedIn',
        likes: 0
    }
]

let handleClick = (channelName) => {
    
    channels.forEach(currentChannel => {
        if(channelName === currentChannel.name) {
            // console.log(channels, channelName)
            currentChannel.likes++
        }
    })
    render()
}


// ================================

const cardTemplate = function (channel) {
    localStorage.getItem('myLikes')
    localStorage.setItem('myLikes', channel.likes)
    return `
    <div class="card">
        <h2 class="owner">${channel.name}</h2>
        <button class="bt-like" onclick="handleClick('${channel.name}')">
            <i class="fa fa-heart fa-3x" aria-hidden="true"></i>
        </button>
        <span class="counter">${channel.likes}</span>
    </div>
    `
}

// function getData() {
//     let data = channels
//     let saveChannels = []
//     for(let i =0; i < data.length; i++){
//         saveChannels.push(data[i].likes)
//     }
//     const like = saveChannels
//     localStorage.getItem('myLikes')
//     localStorage.setItem('myLikes', like)
// }

const render = () => {
    const cards = document.querySelector('.cards')

    cards.innerHTML = channels.map((channel) => {
        return cardTemplate(channel)
    }).join('')
}
render()




