function naoPar (numero){
    if(numero%2 !== 0)
    return numero
    else
    return ""
}
let comeco = 100
let fim = 200
while(comeco<fim){
    console.log(naoPar(comeco))
    comeco = comeco + 1
}