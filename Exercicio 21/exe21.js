let x = 1
while(x<2){
    let usuario = prompt("digite um numero inteiro")
    let numeroU = Number(usuario)
    if(numeroU>0){
        console.log("esse número é positivo")
    }
    else if(numeroU<0){
        console.log("esse numero é negativo")
    }
    let retorno = confirm("Deseja continuar?")
    if(retorno != true){
        break
    }
}