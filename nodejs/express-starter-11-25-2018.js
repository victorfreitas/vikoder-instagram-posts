const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const posts = [{
  id: 1,
  user: 2,
  title: 'Hello Express',
  description: 'Lorem ipsum is simply dummy text.',
}]

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json(posts)
})

app.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT}`
  )
})
