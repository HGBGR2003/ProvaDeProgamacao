let digiteNumero
let encerrandoOuContinuando

do{
    digiteNumero = Number(prompt(" Digite : 1 - Conversão de Graus Celsius Farenheit,    2 - Conversão Fahreint para celcius" +
    " 3 - Peso ideal do Homem e     4 - Peso ideal da mulher"))

    switch (digiteNumero) {
        case 1:
            let graus = Number(prompt("Informe um valor em graus Celisus "))
            let converteCelsius = (graus * 1.8) + 32 
            console.log("O valor em graus Celsius",converteCelsius)
            break
    
        case 2:
            let graus2 = Number(prompt("Informe uma temperatura em Fahrenheit"))
            let converteFahrenheit = (graus2 - 32) / 1.8
            console.log("O valor em graus Fahrenheit",converteFahrenheit)
            break
        
        case 3:
            let alturaHomem = parseFloat(prompt("Informe a altura caso tenha escolhido Homem"))
            let pesoDOHomem = parseFloat(prompt("Qual seu peso?(M)"))
            let pesoIdeal = (72.7 * alturaHomem) - 58;
            if (pesoDOHomem > pesoIdeal){
                console.log("vocé estpa acima do peso")
            }
            break
        
        case 4:
           let alturaMulher = parseFloat(prompt("Informe a altura caso tenha escolhido Mulher"))
           let pesodamulher = parseFloat(prompt("Qual seu peso?(F)"))
           pesoIdealF= (62.1 * alturaMulher) - 44.7
           if (pesodamulher > pesoIdealF) {
            console.log("você está acima do peso")
           }
            
           break
    }

    encerrandoOuContinuando = prompt("Deseja encerrar o programa? (S/N)")


}while(encerrandoOuContinuando != "S")



