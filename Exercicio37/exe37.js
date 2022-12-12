let soma 
let mult 
let subtra 
let divi
let querContinuar

do{
    let escolhaBase = Number(prompt("Escolha entre Adição - 1 ou Subtração - 2 ou Multiplicação - 3"
    + " ou Divisão - 4"))

    let a = Number(prompt("Infome um número ?"))
    let b = Number(prompt("Informe um segundo número?"))

    switch(escolhaBase){
        case 1:
            soma = a + b
            console.log("A soma é",soma)
            break
        
        case 2:
            subtra = a - b
            console.log("O resultado da subtração é",subtra)
            break
        
        case 3:
            mult = a * b
            console.log("O resultado da multiplicação é",mult)
            break
        
       
        case 4:
            divi = a / b
            console.log("O resultado da divisão é",divi)
            break
     }
     
     querContinuar = confirm("Deseja continuar?")
     
}while(querContinuar == true)




 