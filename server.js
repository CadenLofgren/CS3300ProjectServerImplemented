const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    console.log("login")
    res.render('login_page')
})


app.get('/dashboard', (req, res) => {
    console.log("dashboard")
    res.render('dashboard')
})

app.get('/signup_page', (req, res) => {
    console.log("signup")
    res.render('signup_page')
})


app.listen(3000)