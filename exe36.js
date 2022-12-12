let nums = [244,29,10,11,666,14,2,4,61,64]
function Ordenar(a,b) {
    return a - b
}
nums.sort(Ordenar)
console.log(nums)
console.log(nums[0] + " é o menor número")
console.log(nums[9]+ " é o maior número")