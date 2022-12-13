let  graosCasas=1
let casasDoTab=64
let graosDeTrigo=1

for(let i=1; i<casasDoTab; i++){
    graosCasas = graosCasas*2;
    graosDeTrigo = graosDeTrigo + graosCasas
}

console.log("Quantidade de grãos que o monge recebeu é", graosDeTrigo)
