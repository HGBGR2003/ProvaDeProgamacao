 let fraseUsuario =  []
 let informandoValor = prompt("Informe um frase de até 4") //Teste de verificação

while (informandoValor.length < 4) {
    informandoValor = prompt("Digite de novo a frase corretamente")
    fraseUsuario.push(informandoValor)
}

if (fraseUsuario === " ") {
    console.log(fraseUsuario)
}
/*let semEspacos = informandoValor.split(" ")
console.log(semEspacos)*/