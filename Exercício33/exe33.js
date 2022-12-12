let numero_de_alunos = Number(prompt("Quantos alunos são?"))
let matricula_do_aluno
let nota_do_aluno
let soma = 0
let notas = [] 
for (let x = 0; x < numero_de_alunos; x++) {
    matricula_do_aluno = Number(prompt("Qual a matrícula?"))
    nota_do_aluno = Number(prompt("Qual foi a nota do aluno " + (matricula_do_aluno) + "?"))
    notas.push(nota_do_aluno)
    let matriculas = matricula_do_aluno
}
for(let x in notas){
    soma += notas[x]
}

let media = soma/numero_de_alunos
console.log(media.toFixed(1))