let numeroVoltas = Number(prompt("Informe o numero de voltas ?"))
let tempoVoltas = []
let soma = 0
let melhorTime = 3.0
let melhorVolta
let i

for(i = 0 ; i < numeroVoltas; i++){
    let tempo = Number(prompt("Informe o tempo de cada volta ?")) 
    tempoVoltas.push(tempo)

    console.log(tempoVoltas[i])

    if(tempoVoltas < melhorTime) {
        melhorTime = tempoVoltas [i]
        melhorVolta = i
    }
}

for(let i in tempoVoltas){
    soma += tempoVoltas[i]
}

let media = soma / numeroVoltas

console.log("O melhor tempo foi" , melhorTime)
console.log("O melhor tempo foi na volta", melhorVolta)
console.log("A média das notas foi", media)
