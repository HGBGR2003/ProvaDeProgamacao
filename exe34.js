let numeros = [2,4,78,6,35,12,0]

function Ordenar(a,b) {
    return a - b
}
numeros.sort(Ordenar)

const maxValue = numeros.reduce(function(prev,current){
    return prev > current ? prev:current
})

const minValue = numeros.reduce(function(prev,current){
    return prev < current ? prev:current
})

console.log(maxValue)
console.log(minValue)