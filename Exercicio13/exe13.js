let n1 = Number(prompt("digite um numero"))
let n2 = Number(prompt("digite um numero"))
let n3 = Number(prompt("digite um numero"))


let numeros = [n1,n2,n3] 
numeros.sort((a , b ) => {
    if (a>b)  return -1;
})

console.log(numeros)
