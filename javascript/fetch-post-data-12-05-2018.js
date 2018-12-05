const API_URL = 'https://api.example.com/posts'

const postData = (url, data = {}) => (
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
)

const data = {
  id: 110,
  userId: 10,
  title: 'Lorem Ipsum',
  body: 'Lorem Ipsum is simply dummy text.',
}

postData(API_URL, data)
  .then(response => console.log(response))
  .catch(error => console.log(error.message))




