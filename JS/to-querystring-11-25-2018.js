// = Convert object to query string =

const params = {
  q: 'Modern JavaScript',
  mode: 'dev',
  page: 2,
  list: ['first', 'second'],
}

const toQueryString = options => (
  Object
    .entries(options)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')
)

console.log(toQueryString(params))
// Output: q=Modern%20JavaScript&mode=dev&page=2&list=first%2Csecond


// This is an experimental technology, JS native
const searchParams = new URLSearchParams(params)
console.log(searchParams.toString())
// Output: q=Modern+JavaScript&mode=dev&page=2&list=first%2Csecond
