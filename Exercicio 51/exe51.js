let numeroAluno = Number(prompt("Informe a quantidade de alunos"))
let somatorio = 0

for(somatorio; somatorio < numeroAluno; somatorio++){
  let notaAluno1 = Number(prompt("Informe a primeira nota do aluno ?"))
  let notaAluno2 = Number(prompt("Informe a segunda nota do aluno ?"))
  let notaAluno3 = Number(prompt("Informe a terceira nota do aluno ?"))
  let mediaAritimetica =  (notaAluno1 + notaAluno2 + notaAluno3) / 3
  
  if(mediaAritimetica > 7){
    let cont = 1
    cont++
    console.log("A quantidade de alunos com nota Maior de 7.0 é" , cont)
  }else if(mediaAritimetica > 5){
    let contador = 0
    contador++
    console.log("Nenhum aluno tirou nota maior que 5.0 que foi",contador)
  }
}