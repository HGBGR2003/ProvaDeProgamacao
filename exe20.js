let a = 10
let b = 12
let c = 2
function maior(x,y,z){
    if(x>y && x>z)
    return x 
    else if(y>x && y>z)
    return y
    else if(z>x && z>y)
    return z 
}
function menor(x,y,z){
    if(x<y && x<z)
    return x 
    else if(y<x && y<z)
    return y
    else if(z<x && z<y)
    return z 
}
if(a<=0 || b<=0 || c<=0){
    console.log("pelo menos um número inválido.")
}
else{
    console.log(maior(a,b,c)*menor(a,b,c))
    console.log(maior(a,b,c)/menor(a,b,c))
}