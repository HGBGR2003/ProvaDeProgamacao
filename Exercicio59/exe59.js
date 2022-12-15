let valorAlfabeticoDeUmAoOutro = prompt("Informe uma letra de A até Z para ser o parâmetro Inicial?").
toUpperCase().charCodeAt(0)

let valorAlfabeticoDeUmAoOutroCaso2 = prompt("Informe uma letra de A até Z para ser o parâmetro Final?").
toUpperCase().charCodeAt(0)

if (valorAlfabeticoDeUmAoOutroCaso2 < valorAlfabeticoDeUmAoOutro) {
    valorAlfabeticoDeUmAoOutroCaso2 = prompt("A segunda letra tem que ser maior que a primeira").
    toUpperCase().charCodeAt(0)
}

let operacaoDiferenca = valorAlfabeticoDeUmAoOutroCaso2 - valorAlfabeticoDeUmAoOutro - 1

console.log("O número de caracteres entre eles é",operacaoDiferenca)

