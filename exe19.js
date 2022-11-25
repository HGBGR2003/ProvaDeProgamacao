let a = 1
let b = 2
let c = 5
if(a<=0 || b<=0 || c<=0 ){
  console.log("os valores não configuram um tringulo")
}
else if (a==b && a==c){
    console.log("é um triangulo equilátero")
}
else if(a==b || b==c || c==a){
    console.log("é um triangulo isósceles")
}
else{
    console.log("é um triangulo escaleno")
}
