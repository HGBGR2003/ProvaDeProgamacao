let v1 = [1,48,51,14,52,45,18,15,32,15,18,95,14]
let v2 = [1,48,12,14,53,18,18,48,47,21,19,25,14]

for(let i = 0; i < v1.length; i++){
    let valorDoVetor = v1[i]
    let valorDoSegundoVetor = v2[i]

    if(valorDoVetor == valorDoSegundoVetor){
        let acrescente = valorDoVetor++
        let adicione = valorDoSegundoVetor++
        
        console.log(acrescente)
        console.log(adicione)
        
    }

 
}





