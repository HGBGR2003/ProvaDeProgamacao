let a = prompt("Digite um numero:")
let b = prompt("Digite outro numero")
if(a!=b){
    console.log(a, 'e', b, 'são diferentes')
if(a>b){
    console.log(a, "é maior que", b)
}else{
    console.log(a, "é menor que" , b)
}if(b>a){
    console.log(b,"é maior que", a)
}else{
    console.log(b," é menor que", a)
}
if(a>=b){
    console.log(a,">=", b)
}else{
    console.log(a, "<=" , b)
}if(b>=a){
    console.log(b, ">=" , a)
}else{
    console.log(b, "<=", a)
}
}else{
    console.log ("são iguais")
    console.log (a,">=", b)
    console.log (b, ">=" , a)

}