/*let numero_usuario = Number(prompt("Digite um número"))
let sair = prompt("Quer sair? (S/N)")*/
let sair 
do{
    let numero_usuario = Number(prompt("Digite um número"))
   sair = prompt("Quer sair? (S/N)")
    if (numero_usuario > 0) {
        console.log ("Seu número é positivo")
   } else {
        console.log("Seu número é negativo")
   }

   if (numero_usuario %2 == 0){
       console.log("Seu número é par")
   } else {
       console.log("Seu número é impar")
   }

} while(sair != "S")
    

