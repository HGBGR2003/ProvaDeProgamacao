
prompt("EXPRESSE SUA IDADE EM ANOS MESES E DIAS")


let AnosDeIdade= ParseInt("Quantos anos você tem?")
let meses = ParseInt("Agora digite os meses:")
let dias= ParseInt("Agora os dias:")


let idadeExpresaEmDias = ((AnosDeIdade*365)+(meses*30)+ dias)
console.log(prompt("SUA IDADE EXPRESSA EM DIAS É: " + idadeExpresaEmDias))