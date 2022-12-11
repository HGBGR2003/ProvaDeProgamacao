let velocidadeMedia = Number(prompt("Qual é a velocidade média (km/h):"))
let tempoGasto = Number(prompt("Qual foi o tempo gasto: (horas)"))     
let quantidadeLitros = Number(prompt("Quantidade de litros: "))

let distanciaPercorrida = tempoGasto*velocidadeMedia
let litrosUsados = distanciaPercorrida/12


console.log("Velocidade média:" + velocidadeMedia+"km/h")
console.log("Tempo Gasto:" + tempoGasto+"h")
console.log("distanica percorrida:" + distanciaPercorrida +"km")
console.log('Litros gastos:' + litrosUsados+"litros" )



