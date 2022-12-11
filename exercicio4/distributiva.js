let numeros = [1,2,3,4]

for(let i= 0; i<4; i++){
numeros[i]=Number(prompt(("Digite o numero:" + (i+1))))

}

console.log("SOMA1&2:" + (numeros[0] + numeros[1]))
console.log("MULTIPLICAÇÃO1&2:" + (numeros[0]*numeros[1]))

console.log("SOMA1&3:"+ (numeros[0]+numeros[2]))
console.log("MULTIPLICAÇÃO1&3:" + (numeros[0]*numeros[2]))

console.log("SOMA1&4:"+ (numeros[0]*numeros[3]))
console.log("MULTIPLICAÇÃO1&4:" + (numeros[0]*numeros[3]))

console.log("SOMA2&3:"+ (numeros[1]+numeros[2]))
console.log("MULTIPLICAÇÃO2&3:"+ (numeros[1]+numeros[2]))

console.log("SOMA2&4:"+ (numeros[1]+numeros[3]))
console.log("MULTIPLICAÇÃO2&4:"+ (numeros[1]+numeros[3]))

console.log("SOMA3&4: " + (numeros[2]+numeros[3]))
console.log("MULTIPLICAÇÃO3&4: " + (numeros[2]+numeros[3]))



