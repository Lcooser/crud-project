const express = require('express')
const path =  require('path')

const app = express()

//defining the template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//defining public files
app.use(express.static(path.join(__dirname, 'public')))

// enable server to receive data from post(form)
app.use(express.urlencoded({ extended: true }))


//routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Title'
    })
})


// 404 error(not found)
app.use((req, res) => { //middleware 
    res.send('Page not found!')
})

// running server
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
