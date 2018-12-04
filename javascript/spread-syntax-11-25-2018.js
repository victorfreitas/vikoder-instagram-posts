const sum = (...args) => (
  args.reduce((a, b) => a + b)
)
const numbers1 = [10, 20, 30]
const numbers2 = [...numbers1, 40, 50]

console.log(sum(...numbers1))
// Output: 60

console.log(numbers2)
// Output: [ 10, 20, 30, 40, 50 ]

const maxNumber = Math.max(...numbers2)

console.log(maxNumber)
// Output: 50

const person1 = {
  name: 'John',
  age: 30,
}

const person2 = {
  ...person1,
  email: 'john@example.com',
}

console.log(person2)
// Output: { name: 'John', age: 30, email: 'john@example.com' }

const fields = [2018, 10, 25]
const d = new Date(...fields)

console.log(d.toDateString())
// Output: Sun Nov 25 2018
