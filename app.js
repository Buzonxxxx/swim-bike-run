const express = require('express')
      app     = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('rank')
})

app.get('/rank', (req, res) => {
  res.render('rank')
})

app.listen(3001, () => {
  console.log('Server started!')
})