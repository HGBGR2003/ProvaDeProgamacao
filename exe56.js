let vetorPrincipal = [14,10,53,15,22,31,25,24,79,7
    ,54,23,12,87,28,30,27,26,23,66,63,620,369,345,222,153,657,541,222,333,457,8998,2222,44553,
    789543,4887,2222,3558,515,2123,51521,151521,16596,462121,3030,2929,333,
    3313,3234,53453]
let somatorioPares = 0
let somatorioMultiplos5 = 0

for(let i = 0; i < vetorPrincipal.length; i++){
    if ((vetorPrincipal[i] % 2) == 0) {
        somatorioPares++
    }

    if((vetorPrincipal[i] %5) == 0){
        somatorioMultiplos5++
    }
    
    
}
console.log("A quantidade de números pares é",somatorioPares)
console.log("A quantidade de números multiplos de 5 é",somatorioMultiplos5)

