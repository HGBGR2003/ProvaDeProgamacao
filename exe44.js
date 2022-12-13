let digiteNumero = Number(prompt("1 - Conversão de Graus Celsius Farenheit, 2 - Conversão Graus Celsius Fahreint" +
"3 - Peso ideal do Homem e 4 - Peso ideal da mulher"))
/*let conversão_grau_celsius = Number((prompt("Quantos graus?"))*1.8)+ 32 
let conversão_grau_Fahrenheit = Number((prompt("Quantos graus?"))/1.8) - 32*/
switch (digiteNumero) {
    case 1:
        let converteCelsius = (digiteNumero * 1.8) + 32 
        console.log("O valor em graus Celsius",converteCelsius)
        break

    case 2:
        let converteFahrenheit = (digiteNumero * 1.8) - 32
        console.log("O valor em graus Fahrenheit",converteFahrenheit)
        break
    
    case 3:
        let alturaHomem = parseFloat(prompt("Informe a altura caso tenha escolhido Homem ?"))
        let pesoDOHomem = parseFloat(prompt("Informe um peso ?"))
        pesoDOHomem = (72.7 * alturaHomem) - 58;
        if (pesoMulher <= 18.5 && pesoMulher >= 24.9) {
            
        }
        console.log("Seu peso ideal é:",pesoDOHomem, "Kg")            
        break
    
    case 4:
       let alturaMulher = parseFloat(prompt("Informe a altura caso tenha escolhido Mulher ?"))
       let pesoMulher = parseFloat(prompt("Informe um peso ?"))
       pesoMulher = (62.1 * alturaMulher) - 44.7
       if (pesoMulher <= 18.5 && pesoMulher >= 24.9) {
        console.log("Seu peso ideal é:",pesoMulher, "Kg")  
       }
         
       break
}


