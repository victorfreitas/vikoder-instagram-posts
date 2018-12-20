// == Destructuring Object and Array ES6 == //

const profile = {
  name: 'John Doe',
  street: '40 Main st',
  city: 'Boston',
}
const skills = ['React', 'Angular', 'Vue']

// Destructuring
const {
  name: fullName, // Rename
  street,
  city,
  hobby = 'Programming', // Set the default value
} = profile

const [firstSkill, ...restSkills] = skills

console.log(fullName, street, city)
// Output: John Doe 40 Main st Boston

console.log(firstSkill)
// Output: React

console.log(restSkills)
// Output: [ 'Angular', 'Vue' ]

console.log(hobby)
// Output: Programming

// == Destructuring as function parameters ES6 == //

const addProfile = ({ name, street, city }) => {
  console.log(name, street, city)
  // Output: John Doe 40 Main st Boston
}
addProfile(profile)

const addSkills = ([first, ...rest]) => {
  console.log(first)
  // Output: React

  console.log(rest)
  // Output: [ 'Angular', 'Vue' ]
}
addSkills(skills)

// == Nested object and array Destructuring ES6 == //

const billing = {
  address2: {
    street2: '40 Main st',
    city2: 'Boston',
  },
}

const { address2: { street2, city2 } } = billing

console.log(address)
// Output: ReferenceError: address is not defined

console.log(street2)
// Output: 40 Main st

console.log(city2)
// Output: Boston
