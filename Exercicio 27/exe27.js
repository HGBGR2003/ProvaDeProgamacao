function fatorial(valor) {
    if(valor<0) {
        return 'Valor deve ser maior ou igual a zero';
    } else if ( (valor == 0) || (valor == 1) ) {
        return 1
    } else {
        var acumula = 1;
        for(x=valor;x>1;x--) {
        acumula = acumula * x;
      }
      return acumula;
    } 
}
let qtdN = Number(prompt("qual quantidade de números que deverá processar?"))
const numeros = []
let x = 0
do {
  x += 1;
 var usuario = Number(prompt("digite os numeros a serem processados"))
    numeros.push(usuario)
} while (x < qtdN);
let quantidaDadaUsuario = numeros.length
for(y=0;y<quantidaDadaUsuario;y++){
    console.log(fatorial(numeros[y]))
}
