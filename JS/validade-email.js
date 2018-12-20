const validateEmail = email => (
  /^([-.\w]+@([\w-]+\.)+[\w-]{2,20})$/.test(email)
)

console.log(validateEmail(''))
// Output: false

console.log(validateEmail('cat@meow'))
// Output: false

console.log(validateEmail('cat@meow.n'))
// Output: false

console.log(validateEmail(' cat@meow.nice'))
// Output: false

console.log(validateEmail('cat@meow.nice'))
// Output: true

console.log(validateEmail('small.cat@meow.sm'))
// Output: true
