let nomeContribuente = prompt("Informe o nome do vendedor do expediente ?")
let codigoDaPeca = Number(prompt("Informe o código da peça"))
let precoPeca = Number(prompt("Informe o preço da peça"))
let quantidadeVendida = Number(prompt("Informe a quantidade vendida ?"))

let totalVenda = quantidadeVendida*precoPeca

function comissaoCincoPorcento(){
    return  totalVenda = 0.05*totalVenda

}

console.log(nomeContribuente)
console.log(codigoDaPeca)
console.log(precoPeca)
console.log(quantidadeVendida)
console.log(totalVenda)
console.log(comissaoCincoPorcento)