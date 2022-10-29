const express = require('express')
const mongoose = require('mongoose')
const notes = require('./server/notes')
const user = require('./server/user')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
const port = 3000

mongoose.connect('');


app.get('/', (req, res) => {
  res.sendFile("pages/index.html", { root: __dirname })
})

app.get('/login', (req, res) => {
  res.sendFile("pages/login.html", { root: __dirname })
})

app.get('/signup', (req, res) => {
  res.sendFile("pages/signup.html", { root: __dirname })
})

app.post('/addnote', async (req, res) => {
  const { userToken } = req.body
  let note = await note.create(req.body)
  res.status(200).json({ success: true, user: note })
})

app.post('/deletenote', (req, res) => {
  const { userToken } = req.body
  res.sendFile("pages/signup.html", { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})