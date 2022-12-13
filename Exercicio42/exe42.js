let numeroDOUsuario = []
let numeroPegado = Number(prompt("Informe um número para a contagem de valores ?"))
let valoresUsuario
let maior
let menor 
let condicaoParada

do{
    for(let a = 0; a < numeroPegado; a++){
        valoresUsuario = Number(prompt("Informe um número pra se é maior ou não"))
        numeroDOUsuario.push(valoresUsuario)
        maior = Math.max(...numeroDOUsuario)
        menor = Math.min(...numeroDOUsuario)
    }
    
    condicaoParada = Number(prompt("Digite 0 para encerrar ?"))
    
    console.log("O maior valor é",maior)
    console.log("O menor valor é",menor)

    

}while(condicaoParada != 0)

