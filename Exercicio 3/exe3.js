let nomeContribuente = prompt("Informe o nome do vendedor(a) do expediente?")
let codigoDaPeca = Number(prompt("Informe o código da peça?"))
let precoPeca = Number(prompt("Informe o preço da peça?"))
let quantidadeVendida = Number(prompt("Informe a quantidade vendida?"))

let totalVenda = quantidadeVendida * precoPeca

function comissaoCincoPorcento(){
  let resultado 
  resultado = totalVenda * 0.05
  console.log(resultado)
  return resultado
}

console.log("O nome do Vendedor(a) é",nomeContribuente)
console.log("O Código da peça é",codigoDaPeca)
console.log( "O preço da peça está R$",precoPeca)
console.log("A quantidade que foi vendida é",quantidadeVendida)
console.log("O total da venda foi R$",totalVenda.toFixed(2))
