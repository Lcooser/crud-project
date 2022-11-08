const router = require('express').Router()


const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// routes
router.get('/', IndexController.index)


//registration
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)


//list users
router.get('/list', CustomersController.listUsers)



module.exports = router