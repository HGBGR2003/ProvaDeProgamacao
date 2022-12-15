let valorAleatorio = Math.floor(Math.random() * 100) + 1 //Lembrar
let tentativaUsuario
let somatorio = 0

while (valorAleatorio !== tentativaUsuario)  {
    tentativaUsuario = Number(prompt("Informe um número entre 0 e 100, e tente acertar com a máqunia?"))
    if (valorAleatorio > tentativaUsuario) {
        somatorio++
        alert("O número informado é Menor que o valor sorteado")
    }
    if (valorAleatorio < tentativaUsuario) {
        somatorio++
        alert("O número informado é Maior que o valor sorteado")
    } 
}

alert("PARABÉNS Você acertou!!!, O número de tentavias foi: " + somatorio)
alert("O número sorteado foi: " + valorAleatorio)





