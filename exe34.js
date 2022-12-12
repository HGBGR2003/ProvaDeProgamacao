let numeros = [2,4,78,-2,35,12,0]
if([i])
function Ordenar(a,b) {
    return a - b
}
numeros.sort(Ordenar)

const ValorMax = numeros.reduce(function(anterior,posterior){
    return anterior > posterior ? anterior:posterior
})

const ValorMin = numeros.reduce(function(anterior,posterior){
    return anterior < posterior ? anterior:posterior
})

console.log(ValorMax)
console.log(ValorMin