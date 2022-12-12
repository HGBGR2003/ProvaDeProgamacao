let vetorPrincipal = []
let quantidadeNumeros = Number(prompt("Informe quantas vezes vai ser repetido a contagem?"))
let numeroUsuario
let soma = 0
let maiorNumero = 0

for(let i = 0; i < quantidadeNumeros; i++){
    numeroUsuario = Number(prompt("Informe um número inteiro e positivo"))
    vetorPrincipal.push(numeroUsuario)

    if (vetorPrincipal[i] > maiorNumero) {
        maiorNumero = vetorPrincipal[i]
    }
    
}

for(let i in vetorPrincipal){
    soma += vetorPrincipal[i]
}

let media = soma / quantidadeNumeros


console.log("A soma dos numeros do vetor Principal é", soma)
console.log("A média dos numeros do vetor Principal é", media.toFixed(1))
console.log("O maior dos numeros do vetor Principal é", maiorNumero)
