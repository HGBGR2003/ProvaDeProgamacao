var somaNega = 0
var somaPares = 0
var impares = []
var pares = []
let numeros = [4,33,-6,44,13,12,-1]
for (let i = [0]; i < numeros.length ;i ++) {
    if(numeros[i]<0){
        console.log(numeros[i]+" É um numero negativo")
        continue
    }  
    if (numeros[i]%2 == 0) {
        pares.push(numeros[i])
        console.log(numeros[i] + " É um número par")
    }else{
        impares.push(numeros[i])
        console.log(numeros[i] + " É um número impar")
    }
}

for (let i in pares){
    somaPares += pares[i]
}

console.log("A soma dos Pares é: "+ somaPares)
    
for (let i in impares){
        somaNega += impares[i]
}

console.log("A soma dos Impares é: " + somaNega)

