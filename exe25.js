let sexoUsuario = "feminino"
let alturaUsuarioMetros = 1.72
if (sexoUsuario == "feminino"){
    let pesoM = ((62.1 * alturaUsuarioMetros) - 44.7)
    console.log(pesoM.toFixed(2))
}
else{
    let pesoH = ((72.7 * alturaUsuarioMetros) - 58)
    console.log(pesoH.toFixed(2))
}
