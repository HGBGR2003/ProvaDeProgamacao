let a = [3,4,5,6,7]
let b = [3,4,6,7,9,8,10,3]
let vetoresComuns

vetoresComuns = a.filter(x => b.includes(x))

console.log(vetoresComuns)



