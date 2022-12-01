let vetorPrincipal = [1,3,4,5,6,7,8,8,9,1,3,4,6,7,8,9,10,11,1,3,4,7,8,0]
let somatorio = 2
let digitNumero
do{
    digitNumero = Number(prompt("Informe -1 para parar a execucão ?"))
    if(vetorPrincipal.length == 1,3,4){
        somatorio++
        console.log("O numero de valores nesta ordem é" ,somatorio)
    }
}while(digitNumero !=-1)


