const express = require('express')
const path =  require('path')


const db  = require('./database')
const routes = require('./routes')

const app = express()


// conexão com o banco de dados
db.connect()



//defining the template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//defining public files
app.use(express.static(path.join(__dirname, 'public')))

// enable server to receive data from post(form)
app.use(express.urlencoded({ extended: true }))

// definning routes
app.use('/', routes)

// 404 error(not found)
app.use((req, res) => { //middleware 
    res.send('Page not found!')
})

// running server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
