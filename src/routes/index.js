const router = require('express').Router()


//routes
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Title'
    })
})

module.exports = router