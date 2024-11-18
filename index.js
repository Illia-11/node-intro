console.log('Hello from Node')

console.log(0.1 + 0.2)

const sum = (...nums) => nums.reduce((acc, num) => acc + num)

const numbers = [1,2,3,4,5,6,7,8,9,-1]

console.log(sum(...numbers))
