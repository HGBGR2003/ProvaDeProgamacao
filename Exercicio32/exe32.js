let numero_usuario = Number(prompt("Digite um numero menor que 10 e maior que zero"))
numeros = []
numerosImpares = []
numerosPares = []
let soma = 0
if((numero_usuario>0 && numero_usuario<10 && numero_usuario%1==0)){
    for(let i = numero_usuario+1 ; i < 40 + numero_usuario; i++) {
        numeros.push(i)
    } 
}
else{
    console.log("Número inválido")
}
for(let x = 0; x < numeros.length; x++){
    if(numeros[x]%2==0){
        numerosPares.push(numeros[x])
    }
    else{
        numerosImpares.push(numeros[x])
    }
}
for(let y = 0; y < numerosImpares.length; y++){
    soma = soma + ((numerosImpares[y])**2)
}
console.log(soma) // o programa soma os numeros a partir do numero dado pelo usuario
                 //ou seja nao conta o numero dado pelo usuario.