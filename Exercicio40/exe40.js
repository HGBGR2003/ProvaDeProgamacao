while(1>0){
let indicePoluicao = Number(prompt("Digite o índice de poluição"))

if(indicePoluicao>=0 && indicePoluicao<=0.25){
    console.log("Índice de poluição aceitável")
}
else if(indicePoluicao>=0.3 && indicePoluicao<0.4){
    console.log("Enviar intimação as indústrias do 1º grupo")
}
else if (indicePoluicao>=0.4 && indicePoluicao<0.5){
    console.log("Enviar intimação as indústrias do 1º e 2º grupo")
}
else if(indicePoluicao>=0.5 && indicePoluicao<=1){
    console.log("Enviar intimação as indústrias do 1º, 2º e 3º grupo")
}
else if(indicePoluicao>1){
    console.log("valor invalido")
}
let parar = prompt("Deseja encerrar o programa? Se sim digite 'S'") 
if(parar == "S"){
    break
}
}