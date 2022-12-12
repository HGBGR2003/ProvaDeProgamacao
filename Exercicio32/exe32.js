let numero_usuario = 0
let impar = 0

do{
    numero_usuario = Number(prompt("Informe um número maior que 0 e menor que 100"))
}while(numero_usuario <= 0 || numero_usuario >= 10)
   

for(let i = numero_usuario ; i < 40 + numero_usuario; i++) {
    if(i%2==1){
       impar += i*i
    } 
}
console.log("O resultado da soma dos 20 primeiros números é ", impar)
