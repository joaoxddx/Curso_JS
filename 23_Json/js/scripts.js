const dog = {
    name: 'Spaike',
    age: 10,
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)

console.log(obj) // para desconverter json para objeto para atuar no front-end