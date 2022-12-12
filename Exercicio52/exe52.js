let vetorPrincipal = []
let somatorio = 0
let digitNumero
let arrayDois = []
let arrayControle = [1,3,4]
do{
    digitNumero = Number(prompt("Informe um número ou -1 para sair da execucão ?"))
    vetorPrincipal.push(digitNumero)
    arrayDois = vetorPrincipal.slice(-3)
    
    if(JSON.stringify(arrayDois) == JSON.stringify(arrayControle)){
        somatorio++  
    }
}while(digitNumero !=-1)

console.log("O numero de valores nesta ordem é" ,somatorio)
