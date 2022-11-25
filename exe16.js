let num1 = 7
let num2 = 5
function comparador(x, y){
    if(x>y){
        return (x + ' é o número maior e ' + y + " é o menor número")

    }
    else if(y>x){
        return (y + ' é o numero maior ' + x + " é o menor número")
    }
    else{
        return ("Os numeros são iguais")
    }
}
console.log(comparador(num1,num2))
