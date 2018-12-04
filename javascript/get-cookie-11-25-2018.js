/*
  Return cookie value if success
  or empty string if failure
*/
const getCookie = name => (
  document
    .cookie
    .replace(
      new RegExp(`(.*${name}=([^;]*)|.*)`, 'g'),
      '$2'
    )
)

console.log(getCookie('language'))
