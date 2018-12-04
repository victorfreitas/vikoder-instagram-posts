const waitMe = ms => new Promise(resolve => {
  setTimeout(resolve, ms)
})

const helloAsync = async () => {
  await waitMe(1000)

  return 'Already done'
}

helloAsync()
  .then(result => {
    console.log(result)
    // Output: Already done
  })
