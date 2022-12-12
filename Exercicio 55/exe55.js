let informandoValor = prompt("Informe um frase de até 4")

let semEspacos

while (informandoValor.length < 50) {
   informandoValor = prompt("Digite de novo a frase corretamente")
}

semEspacos = informandoValor.replace(/\s/g,'')
console.log(semEspacos)

const ocorrencias = (informandoValor.match(/ /g) || []).length;
console.log("Mostando a quantidade de espaços na frase: ",ocorrencias)
