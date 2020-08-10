// arrayFilterMapReduce  bootcamp DIO

const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 12
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 6
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 0.08
    }
]

const isShortthanFive = number => {
    return number < 5
}

const less5Age = pets.filter(({ age }) => isShortthanFive(age))
console.log(less5Age)

const namePets = pets.map(({ name }) => name)
console.log(namePets)

const weightPets = pets.reduce((total, { weight }) => {
    return total += weight
}, 0)

console.log(weightPets)