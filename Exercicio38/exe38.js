let salario_menos50  
let E 
let sair 

   while(1>0){ 
   let codigo = Number(prompt("Qual seu código?"))
   let horas_trabalhadas =  Number(prompt("Quantas horas você trabalhou?"))
    if(horas_trabalhadas >0 ){
    salario_menos50 = horas_trabalhadas * 10
    } 
    if(horas_trabalhadas > 50) {
       E = ((horas_trabalhadas - 50) * 20)
    } else (E = 0)

    console.log ("Pagamento por horas extras :", E)
    console.log ("Salário Total :" ,salario_menos50 + E)
    sair = prompt("Deseja encerrar o programa?")
   if(sair == "S" || sair == "s"){
      break
   }   
   }  