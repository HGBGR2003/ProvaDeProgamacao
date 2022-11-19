let x = [4,5,6]
let y = [7,8,9]
let soma = 0

for (let i = 0; i < x.length; i++) {
    let produto = x[i] * y[i]
    soma = soma + produto
}

console.log(soma)