let número_de_alunos = Number(prompt("Quantos alunos são?"))
let matrícula_do_aluno
let nota_do_aluno
let soma = 0
let notas = [ ] 
for (let x = 0; x < número_de_alunos; x++) {
   matrícula_do_aluno = Number(prompt("Qual a matrícula?"))
    nota_do_aluno = Number(prompt("Qual foi a nota do aluno?:",matrícula_do_aluno))
}
notas.push(nota_do_aluno)
let matrículas = matrícula_do_aluno
for (let i in notas){ soma += notas}
let média = soma/número_de_alunos
console.log(média)