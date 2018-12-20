// async/await works for any thenable
class Who {
  constructor(name) {
    this.name = name
  }

  then(resolve, reject) {
    if (!this.name) {
      reject(new Error('Who are you'))
      return
    }

    setTimeout(() => {
      resolve(`Name: ${this.name}`)
    }, 1000)
  }
}

const asyncCall = async () => {
  try {
    const result = await new Who('Mary Doe')
    console.log(result)
    // Output after 1 second: Name: Mary Doe
  } catch (err) {
    console.log('Error:', err.message)
  }
}

asyncCall()
