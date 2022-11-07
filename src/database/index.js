const mongoose = require('mongoose')


function connect(){
    
    
    mongoose.connect("mongodb://0.0.0.0:27017/crud-project?")

    const db = mongoose.connection


    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))
}


module.exports = {
    connect
}