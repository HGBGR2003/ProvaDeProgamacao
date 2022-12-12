let n1 = Number(prompt("N1:"))
let n2 = Number(prompt("N2:"))
let n3 = Number(prompt("N3:"))
let n4 = Number(prompt("N4:"))

mediaEscolar = (n1+n2+n3+n4)/4

if(mediaEscolar>=7){
    console.log("ALUNO APROVADO COM MÉDIA :" , media )
}else if(mediaEscolar<7){
    let notaRecuperacao = (number(prompt("DIGITE A NOTA DA RECUPERACAO")))
}

mediaAposRecuperacao = (mediaEscolar+notaRecuperacao)/2

if(mediaAposRecuperacao>=7){
    console.log("ALUNO APROVADO NA RECUPERAÇÃO COM MÉDIA:", mediaAposRecuperacao)
}else if(mediaiAposRecuperacao<7){
    console.log("ALUNO REPROVADO")
    console.log("MÉDIA DO ALUNO:", mediaAposRecuperacao)
}