
prompt("EXPRESSE SUA IDADE EM ANOS MESES E DIAS")


let AnosDeIdade= Number(prompt("Quantos anos você tem?"))
let meses = Number(prompt("Agora digite os meses:"))
let dias= Number(prompt("Agora os dias:"))


let idadeExpresaEmDias = ((AnosDeIdade*365)+(meses*30)+ dias)
console.log(prompt("SUA IDADE EXPRESSA EM DIAS É: " + idadeExpresaEmDias))