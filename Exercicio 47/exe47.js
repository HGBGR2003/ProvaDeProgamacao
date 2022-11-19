let vetor = []
let unicoInteiro
let maiorUnicoInteiro = 0
let menorUnicoInteiro = 0
let igualUnicoInteiro = 0

for (let i = 0; i < 10 ; i++) {
    let xUsuario = prompt("Informe um número inteiro")
    vetor.push(xUsuario)
}

unicoInteiro = prompt("Informe um numero")

for (let i = 0; i < vetor.length; i++) {
    if (unicoInteiro > vetor[i]) {
        maiorUnicoInteiro++ 
    }else if(unicoInteiro < vetor[i]){
        menorUnicoInteiro++
    }else if(unicoInteiro == vetor[i]){
        igualUnicoInteiro++
    }    
}

console.log("MAIOR =",maiorUnicoInteiro)
console.log("MENOR =",menorUnicoInteiro)
console.log("IGUAL =",igualUnicoInteiro)