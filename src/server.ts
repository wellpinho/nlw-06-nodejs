import express from 'express'

const app = express()

app.get('/', (req , res) => {
  return res.send('Olá GET')
})

app.post('/post', (req, res) => {
  return res.send('Olá POST')
})

app.put('/put', (req, res) => {
  return res.send('Olá PUT')
})

app.delete('/delete', (req, res) => {
  return res.send('Olá DELETE')
})

app.listen(4000, () => {
  console.log('Running on port 4000')
});