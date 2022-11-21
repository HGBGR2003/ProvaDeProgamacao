vetorIdade = []
vetorNome = []

for (let i = 0; i < 20; i++) {
    let nomeCanditado = prompt("Informe o nome da canditada ?")
    let idadeCanditado = Number(prompt("Informe uma idade entre 18 e 20?"))

    
    if (idadeCanditado >= 18 && idadeCanditado <= 20){
        vetorIdade.push(idadeCanditado)
        vetorNome.push(nomeCanditado)
        console.log(vetorNome)       
    }
   
}



