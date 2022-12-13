let digiteNumero
let encerrandoOuContinuando

do{
    digiteNumero = Number(prompt(" Digite : 1 - Conversão de Graus Celsius Farenheit, 2 - Conversão Graus Celsius Fahreint" +
    " 3 - Peso ideal do Homem e 4 - Peso ideal da mulher"))

    switch (digiteNumero) {
        case 1:
            let graus = Number(prompt("Informe um valor em graus Celisus "))
            let converteCelsius = (graus * 1.8) + 32 
            console.log("O valor em graus Celsius",converteCelsius)
            break
    
        case 2:
            let graus2 = Number(prompt("Informe uma temperatura em Fahrenheit"))
            let converteFahrenheit = (graus2 * 1.8) - 32
            console.log("O valor em graus Fahrenheit",converteFahrenheit)
            break
        
        case 3:
            let alturaHomem = parseFloat(prompt("Informe a altura caso tenha escolhido Homem"))
            let pesoDOHomem
            pesoDOHomem = (72.7 * alturaHomem) - 58;
            if (pesoDOHomem <= 18.5 && pesoDOHomem >= 24.9) {
                console.log("Seu peso ideal é:",pesoDOHomem, "Kg")     
            }else if(pesoDOHomem > 24.9){
                console.log("Está acima do peso")
            }
            break
        
        case 4:
           let alturaMulher = parseFloat(prompt("Informe a altura caso tenha escolhido Mulher"))
           let pesoMulher
           pesoMulher = (62.1 * alturaMulher) - 44.7
           if (pesoMulher <= 18.5 && pesoMulher >= 24.9) {
                console.log("Seu peso ideal é:",pesoMulher, "Kg")  
           }else if(pesoMulher > 24.9){
                console.log("Está acima do peso")
           }
           break
    }

    encerrandoOuContinuando = prompt("Deseja encerrar o programa? (S/N)")


}while(encerrandoOuContinuando != "S")



