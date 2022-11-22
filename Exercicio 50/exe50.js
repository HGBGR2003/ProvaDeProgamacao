let valorAleatorio = 5//Math.floor(Math.random() * 100) + 1
console.log(valorAleatorio)
let tentativaUsuario = Number(prompt("Informe um número, e tente acertar com a máqunia ?"))
let contadorQuantidade


do{
    tentativaUsuario++
    if (valorAleatorio > tentativaUsuario) {
        console.log("O numero sorteado foi " + valorAleatorio + " é MAIOR")
    }else{
        console.log("O numero sorteado foi " + valorAleatorio + " é MENOR")
    }
      
}while(tentativaUsuario != valorAleatorio)

     



/*if (tentativaUsuario === valorAleatorio) {
    contadorQuantidade++
}*/
