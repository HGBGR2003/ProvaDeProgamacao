let valorAleatorio = 5//Math.floor(Math.random() * 100) + 1
let tentativaUsuario = Number(prompt("Informe um número, e tente acertar com a máqunia ?"))


    if (valorAleatorio > tentativaUsuario) {
        console.log("O numero sorteado foi " + valorAleatorio + " é MAIOR")
    }else{
        console.log("O numero sorteado foi " + valorAleatorio + " é MENOR")
    }
  



console.log("A quantidade de tentativas" ,tentativaUsuario) 



