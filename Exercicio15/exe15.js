let n1 = Number(prompt("N1:"))
let n2 = Number(prompt("N2:"))
let n3 = Number(prompt("N3:"))
let n4 = Number(prompt("N4:"))
let notaRecuperacao
let mediaAposRecuperacao 

let mediaEscolar = (n1+n2+n3+n4)/4

if(mediaEscolar>=7){
    let media = mediaEscolar
    console.log("ALUNO APROVADO COM MÉDIA :" , media)
}else if(mediaEscolar<7){
   notaRecuperacao = Number(prompt("DIGITE A NOTA DA RECUPERAÇÃO"))
}

mediaAposRecuperacao = (mediaEscolar + notaRecuperacao) / 2

if(mediaAposRecuperacao>=7){
    console.log("ALUNO APROVADO NA RECUPERAÇÃO COM MÉDIA:", mediaAposRecuperacao.toFixed(0))
}else if(mediaAposRecuperacao<7){
    console.log("ALUNO REPROVADO")
    console.log("MÉDIA DO ALUNO:", mediaAposRecuperacao.toFixed(1))
}