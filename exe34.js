let numeros = [1,4,78,2,35,12,0]
bloco_externo:{
for (let i = 0; i < numeros.length; i++) {
    const parar = numeros[i];
    if(parar<0){
        break bloco_externo
    }
}
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
console.log(ValorMin)
}
