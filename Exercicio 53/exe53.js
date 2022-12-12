let numeroVoltas = parseFloat(prompt("Informe o numero de voltas ?"))
let tempoVoltas = []
let soma = 0
let melhorTempo = 200
let melhorVolta

for(let i = 0 ; i < numeroVoltas; i++){
    let tempo = parseFloat(prompt("Informe o tempo de cada volta ?")) 
    tempoVoltas.push(tempo)

    soma+= tempo

    if(tempo < melhorTempo) {
        melhorTempo = tempo
        melhorVolta = i
    }
}



let media = soma / numeroVoltas

console.log("O melhor tempo foi" , melhorTempo)
console.log("O melhor tempo foi na volta", melhorVolta+1)
console.log("A média das notas foi de", media.toFixed(2))
