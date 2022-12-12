let fraseUsuario = prompt("Informe uma frase?")
let comparandoVogal = ['a','e','i','o','u']

for (let i = 0; i < fraseUsuario.length; i++) {
    if (comparandoVogal.includes(fraseUsuario[i])) {
        console.log(fraseUsuario[i])
    }
    
}