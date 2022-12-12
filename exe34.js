let numeros = [2,4,78,6,35,12,0]
function Ordenar(a,b) {
    return a - b
}
numeros.sort(Ordenar)
console.log(numeros)
console.log(numeros[0] + " é o menor número")
console.log(numeros[numeros.length]+ " é o maior número")