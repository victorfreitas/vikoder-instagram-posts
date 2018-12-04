const pathToArray = path => (
  (path || window.location.pathname).match(/[^\/]+/g) || []
)

const pathToObj = (path) => {
  const [category, subcategory, postname] = pathToArray(path)
  return { category, subcategory, postname }
}

console.log(pathToObj('/library/react/frontend-developers/'))
/*
  { category: 'library',
    subcategory: 'react',
    postname: 'frontend-developers' }
*/
