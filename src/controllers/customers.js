const CustoemrsModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Clientes Registration'

function index(req, res){
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
}

async function add(req, res){
    const {
        name,
        age, 
        email, 
        password,
    } = req.body


    const passwordCrypto = await crypto(password)

    const register = new CustoemrsModel({
        name, 
        age,
        email,
        password: passwordCrypto,
     })

    register.save()

    res.render('register', {
        title: defaultTitle,
        message: 'Successful Registration!'
    })
}

async function listUsers(req, res){

    const users = await CustoemrsModel.find()

    res.render('listUsers', {
        title: "User's list",
        users,
    })
}

module.exports = {
    add, 
    index,
    listUsers,
}