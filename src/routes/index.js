const router = require('express').Router()

const CustomersController = require('../controllers/customers')


//routes
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Title'
    })
})


router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Customers registration'
    })
})


router.post('/register/add', CustomersController.add)

module.exports = router