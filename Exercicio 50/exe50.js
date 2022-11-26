let valorAleatorio = Math.floor(Math.random() * 100) + 1
let tentativaUsuario = Number(prompt("Informe um número, e tente acertar com a máqunia ?"))

if(tentativaUsuario != valorAleatorio){
    if (valorAleatorio > tentativaUsuario) {
        console.log("O numero sorteado foi MAIOR que o valor sorteado")
    }else{
        console.log("O numero sorteado foi MENOR que o valor sorteado")
    }  

}

for(let i = 0; i == valorAleatorio; i++){
    console.log("O número de tentavias foi",tentativaUsuario);
}





