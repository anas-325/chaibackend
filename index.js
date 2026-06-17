
require('dotenv').config()
const express = require('express');
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('anas.com')
})
app.get('/Home',(req,res)=>{
    res.send('hi yo are dummy server')
})
app.get('/chai',(req,res)=>{
    res.send('chai aur code')
})
app.get('/json',(req,res)=>{
    res.send('<h2> HEllo jee</h2>')
})











app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})