// == OLD VERSION ==

var numbers = [10, 20, 30, 40, 50]
var total = 0

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i]
}

console.log('Total: ' + total)
// Ouput: 150

// == NEW VERSION ES6 ==

const numbers2 = [10, 20, 30, 40, 50]
const total2 = numbers2.reduce((a, b) => a + b)

console.log(`Total: ${total2}`)
// Ouput: 150
