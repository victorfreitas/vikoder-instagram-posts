const text = 'lorem IpsUm is simPly dummy teXt'

console.log(text)

const ucStr = (str, pattern) => (
  str
    .toLowerCase()
    .replace(pattern, s => s.toUpperCase())
)
const ucFirst = str => ucStr(str, /^\w/)
const ucWords = words => ucStr(words, /\b(\w)/g)

console.log(ucFirst(text))
// Output: Lorem ipsum is simply dummy text

console.log(ucWords(text))
// Output: Lorem Ipsum Is Simply Dummy Text
