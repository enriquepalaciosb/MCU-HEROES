const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.use( express.static( "public" ) );

const heroesArray = [

]

app.get('/', (req, res) => {
    res.render('pages/index', {
        user
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        user
    })
})

app.get('/movies', (req, res) => {
    res.render('pages/movies', {
        movies: movies
    })
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts
    })
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts
    })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
